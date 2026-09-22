
    Add-Type -AssemblyName System.Speech;
    $s = New-Object System.Speech.Synthesis.SpeechSynthesizer;
    $voices = $s.GetInstalledVoices();
    $chosen = $voices | Where-Object { $_.VoiceInfo.Name -like "*Zira*" } | Select-Object -First 1;
    if ($chosen) { $s.SelectVoice($chosen.VoiceInfo.Name) }
    $s.Rate = 0;
    $s.SetOutputToWaveFile('E:/dhshishir-website/scripts/temp_video_build/voice_1.wav');
    $s.Speak('Stop spending thousands of dollars on expensive coaching. Welcome to dhshishir dot com — the world''s premier, 100 percent free interactive platform for IELTS preparation, academic diplomacy, and strategic communication.');
    $s.Dispose();
  