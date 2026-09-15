import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const supabaseUrl = 'https://htahcdfxjcqnscrqiqcm.supabase.co';
const supabasePublishableKey = 'sb_publishable_upQ3Mtw_udgoPYLok9igyQ_JgkjZIyb';
const supabase = createClient(supabaseUrl, supabasePublishableKey);

async function runDailyBackup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const dateStr = new Date().toISOString().split('T')[0];
  const backupDir = path.join(rootDir, 'backups', dateStr);

  fs.mkdirSync(backupDir, { recursive: true });

  console.log(`[Backup Engine] Starting automated daily backup for: ${dateStr}...`);

  try {
    // 1. Fetch Profiles table
    const { data: profiles, error: pErr } = await supabase.from('profiles').select('*');
    if (pErr) console.error('Error fetching profiles:', pErr);

    // 2. Fetch Quizzes table
    const { data: quizzes, error: qErr } = await supabase.from('diagnostic_quiz_results').select('*');
    if (qErr) console.error('Error fetching quizzes:', qErr);

    const backupPayload = {
      backupTimestamp: new Date().toISOString(),
      version: '1.0.0',
      database: 'Supabase PostgreSQL (htahcdfxjcqnscrqiqcm)',
      statistics: {
        totalProfiles: profiles ? profiles.length : 0,
        totalQuizzes: quizzes ? quizzes.length : 0
      },
      tables: {
        profiles: profiles || [],
        diagnostic_quiz_results: quizzes || []
      }
    };

    // Write Full JSON Snapshot
    const jsonPath = path.join(backupDir, `dhshishir_db_snapshot_${timestamp}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(backupPayload, null, 2), 'utf-8');

    // Write CSV for Profiles
    if (profiles && profiles.length > 0) {
      const pHeaders = Object.keys(profiles[0]).join(',');
      const pRows = profiles.map(row => Object.values(row).map(v => typeof v === 'object' ? `"${JSON.stringify(v).replace(/"/g, '""')}"` : `"${v}"`).join(','));
      const pCsv = [pHeaders, ...pRows].join('\n');
      fs.writeFileSync(path.join(backupDir, `profiles_${timestamp}.csv`), pCsv, 'utf-8');
    }

    // Write CSV for Quizzes
    if (quizzes && quizzes.length > 0) {
      const qHeaders = Object.keys(quizzes[0]).join(',');
      const qRows = quizzes.map(row => Object.values(row).map(v => typeof v === 'object' ? `"${JSON.stringify(v).replace(/"/g, '""')}"` : `"${v}"`).join(','));
      const qCsv = [qHeaders, ...qRows].join('\n');
      fs.writeFileSync(path.join(backupDir, `diagnostic_quiz_results_${timestamp}.csv`), qCsv, 'utf-8');
    }

    console.log(`✅ Automated backup completed successfully!`);
    console.log(`📁 Backup stored at: ${backupDir}`);
    console.log(`📊 Records backed up: ${profiles ? profiles.length : 0} profiles, ${quizzes ? quizzes.length : 0} quiz results.`);
  } catch (err) {
    console.error('❌ Backup failed:', err);
    process.exit(1);
  }
}

runDailyBackup();
