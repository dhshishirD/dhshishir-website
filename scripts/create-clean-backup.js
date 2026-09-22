import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const backupDir = path.join(rootDir, 'backups');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const dateStr = new Date().toISOString().slice(0, 10);
const zipFileName = `dhshishir-website-backup-${dateStr}.zip`;
const zipFilePath = path.join(backupDir, zipFileName);

console.log('📦 Creating clean, lightweight archive of dhshishir.com...');
console.log('   (Excluding temporary node_modules and dist folders)');

// Using PowerShell Compress-Archive or tar on individual folders
const psCommand = `powershell -Command "Get-ChildItem -Path '${rootDir}' -Exclude 'node_modules','dist','.git','backups' | Compress-Archive -DestinationPath '${zipFilePath}' -Force"`;

try {
  if (fs.existsSync(zipFilePath)) {
    fs.unlinkSync(zipFilePath);
  }
  execSync(psCommand, { cwd: rootDir, stdio: 'inherit' });
  const stats = fs.statSync(zipFilePath);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Success! Created clean backup archive:`);
  console.log(`   📁 File: ${zipFilePath}`);
  console.log(`   ⚖️  Size: ${sizeMb} MB (Compact & 100% complete)`);

  // Copy to Google Drive Development folder if available
  const gDriveDevPath = 'G:\\My Drive\\Development\\dhshishir-website-backups';
  if (fs.existsSync('G:\\My Drive\\Development')) {
    if (!fs.existsSync(gDriveDevPath)) {
      fs.mkdirSync(gDriveDevPath, { recursive: true });
    }
    const gDriveZipPath = path.join(gDriveDevPath, zipFileName);
    fs.copyFileSync(zipFilePath, gDriveZipPath);
    console.log(`☁️  Synced to Google Drive: ${gDriveZipPath}`);
  }
} catch (err) {
  console.error('Backup creation error:', err);
}
