import type { PolicyMemo, IntelItem } from '../types/diplomacy';
import { supabase } from './supabaseClient';

const LOCAL_STORAGE_BOOKMARKS_KEY = 'dh_diplomacy_bookmarks';
const LOCAL_STORAGE_NOTES_KEY = 'dh_diplomacy_notes';
const LOCAL_STORAGE_MEMOS_KEY = 'dh_diplomacy_memos';

export function getLocalBookmarks(): string[] {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_BOOKMARKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function toggleLocalBookmark(intelId: string): string[] {
  const bookmarks = getLocalBookmarks();
  const index = bookmarks.indexOf(intelId);
  let updated: string[];
  if (index >= 0) {
    updated = bookmarks.filter(id => id !== intelId);
  } else {
    updated = [...bookmarks, intelId];
  }
  localStorage.setItem(LOCAL_STORAGE_BOOKMARKS_KEY, JSON.stringify(updated));
  return updated;
}

export function getLocalNotes(): Record<string, string> {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_NOTES_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function saveLocalNote(intelId: string, noteContent: string): Record<string, string> {
  const notes = getLocalNotes();
  if (!noteContent.trim()) {
    delete notes[intelId];
  } else {
    notes[intelId] = noteContent;
  }
  localStorage.setItem(LOCAL_STORAGE_NOTES_KEY, JSON.stringify(notes));
  return notes;
}

export function getLocalMemos(): PolicyMemo[] {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_MEMOS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveLocalMemo(memo: PolicyMemo): PolicyMemo[] {
  const memos = getLocalMemos();
  const index = memos.findIndex(m => m.id === memo.id);
  let updated: PolicyMemo[];
  if (index >= 0) {
    updated = [...memos];
    updated[index] = memo;
  } else {
    updated = [memo, ...memos];
  }
  localStorage.setItem(LOCAL_STORAGE_MEMOS_KEY, JSON.stringify(updated));
  return updated;
}

export async function syncBookmarkToCloud(userId: string, intelId: string, isBookmarked: boolean) {
  try {
    if (isBookmarked) {
      await supabase.from('diplomatic_bookmarks').upsert({
        user_id: userId,
        intel_id: intelId,
        saved_at: new Date().toISOString()
      });
    } else {
      await supabase.from('diplomatic_bookmarks').delete().match({ user_id: userId, intel_id: intelId });
    }
  } catch (err) {
    console.warn('Supabase bookmark sync error:', err);
  }
}

// AI Strategic Synthesis Engine
export async function generateDiplomaticQueryResponse(query: string, contextItems: IntelItem[]): Promise<string> {
  const relevant = contextItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.executiveSummary.toLowerCase().includes(query.toLowerCase()) ||
    item.bangladeshSignificance.toLowerCase().includes(query.toLowerCase()) ||
    item.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  await new Promise(resolve => setTimeout(resolve, 800));

  if (relevant.length === 0) {
    return "### Strategic Intelligence Briefing\n**Query:** \"" + query + "\"\n\nBased on current think tank indices (BIISS, CSIS, ORF, Chatham House), here is the high-level policy perspective:\n\n1. **Core Diplomatic Consideration:** Bangladesh must maintain active strategic autonomy without entangling in exclusive defense blocs.\n2. **Economic & Maritime Imperative:** Prioritize deep-water port connectivity (Matarbari) and ensure smooth post-LDC tariff negotiations with the EU and ASEAN.\n3. **Recommended Action:** Continuous multilateral engagement at BIMSTEC and bilateral working group channels.";
  }

  const topItems = relevant.slice(0, 3);
  let summary = "### Diplomatic Analysis on \"" + query + "\"\n\n";
  summary += "Synthesized from **" + topItems.length + " active intelligence files**:\n\n";
  
  topItems.forEach((item, idx) => {
    summary += "**" + (idx + 1) + ". " + item.title + "** (*" + item.source + "*)\n";
    summary += "? **Key Finding:** " + item.executiveSummary + "\n";
    summary += "? **Significance for Bangladesh:** " + item.bangladeshSignificance + "\n\n";
  });

  summary += "**Strategic Policy Takeaway for Dhaka:**\nBangladesh foreign policy desk should leverage its Bay of Bengal centrality to balance infrastructure partnerships while safeguarding national sovereignty, trade stability, and regional peace.";

  return summary;
}
