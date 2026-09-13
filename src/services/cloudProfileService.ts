import { supabase } from './supabaseClient';
import { getFluencyProfile } from './fluencyProfileService';

export interface CloudProfile {
  id: string;
  email?: string;
  full_name?: string;
  avatar_url?: string;
  current_cefr_level: string;
  latest_score: number;
  flagged_weak_patterns: string[];
  streak_days: number;
  last_active_date: string;
}

export const syncLocalProfileToCloud = async (userId: string, email?: string, fullName?: string) => {
  const localProfile = getFluencyProfile();

  // Upsert Profile only - do NOT bulk insert history here
  const { data: profile, error: profileErr } = await supabase
    .from('profiles')
    .upsert({
      id: userId,
      email: email,
      full_name: fullName || localProfile.userAlias,
      current_cefr_level: localProfile.currentCefrLevel || 'A1',
      latest_score: localProfile.latestScore || 0,
      flagged_weak_patterns: localProfile.flaggedWeakPatterns,
      streak_days: localProfile.streakDays,
      last_active_date: new Date().toISOString()
    })
    .select()
    .single();

  if (profileErr) {
    console.error('Error syncing profile to cloud:', profileErr);
  }

  return profile;
};

export const recordQuizResultInCloud = async (userId: string, item: any) => {
  if (!userId || !item) return null;

  const { data, error } = await supabase
    .from('diagnostic_quiz_results')
    .insert({
      user_id: userId,
      score: item.score,
      total_questions: item.totalQuestions || item.total_questions || 10,
      percentage: item.percentage,
      cefr_level: item.cefrLevel || item.cefr_level,
      reading_score: item.readingScore || item.reading_score || 0,
      listening_score: item.listeningScore || item.listening_score || 0,
      speaking_score: item.speakingScore || item.speaking_score || 0,
      flagged_weak_patterns: item.flaggedWeakPatterns || item.flagged_weak_patterns || [],
      completed_at: item.completedAt || item.completed_at || new Date().toISOString()
    })
    .select()
    .single();

  if (error) {
    console.error('Error recording quiz result in cloud:', error);
  }
  return data;
};

export const fetchCloudProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching cloud profile:', error);
    return null;
  }
  return data as CloudProfile;
};

export const fetchCloudQuizHistory = async (userId: string) => {
  const { data, error } = await supabase
    .from('diagnostic_quiz_results')
    .select('*')
    .eq('user_id', userId)
    .order('completed_at', { ascending: false });

  if (error) {
    console.error('Error fetching quiz history:', error);
    return [];
  }

  if (!data || data.length === 0) return [];

  // Deduplicate records in memory and identify redundant database rows to purge
  const seenTimestamps = new Set<string>();
  const duplicateIds: string[] = [];
  const uniqueRecords = data.filter((item) => {
    const timestampKey = item.completed_at ? new Date(item.completed_at).toISOString() : item.id;
    if (seenTimestamps.has(timestampKey)) {
      if (item.id) duplicateIds.push(item.id);
      return false;
    }
    seenTimestamps.add(timestampKey);
    return true;
  });

  // Permanently purge redundant database duplicates if any exist
  if (duplicateIds.length > 0) {
    supabase
      .from('diagnostic_quiz_results')
      .delete()
      .in('id', duplicateIds)
      .then(({ error: delErr }) => {
        if (delErr) {
          console.error('Error purging duplicate quiz history rows from database:', delErr);
        } else {
          console.log(`Successfully purged ${duplicateIds.length} duplicate diagnostic records from cloud DB.`);
        }
      });
  }

  return uniqueRecords;
};
