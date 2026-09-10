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

  // 1. Upsert Profile
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

  // 2. Sync Quiz History
  if (localProfile.history && localProfile.history.length > 0) {
    for (const item of localProfile.history) {
      await supabase.from('diagnostic_quiz_results').insert({
        user_id: userId,
        score: item.score,
        total_questions: item.totalQuestions,
        percentage: item.percentage,
        cefr_level: item.cefrLevel,
        reading_score: item.readingScore,
        listening_score: item.listeningScore,
        speaking_score: item.speakingScore,
        flagged_weak_patterns: item.flaggedWeakPatterns,
        completed_at: item.completedAt
      });
    }
  }

  return profile;
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
  return data;
};
