
    Add-Type -AssemblyName System.Speech;
    $s = New-Object System.Speech.Synthesis.SpeechSynthesizer;
    $voices = $s.GetInstalledVoices();
    $chosen = $voices | Where-Object { $_.VoiceInfo.Name -like "*Zira*" } | Select-Object -First 1;
    if ($chosen) { $s.SelectVoice($chosen.VoiceInfo.Name) }
    $s.Rate = 0;
    $s.SetOutputToWaveFile('E:/dhshishir-website/scripts/temp_video_build/voice_5.wav');
    $s.Speak('Track your progress on the cloud, download comprehensive course handbooks, and earn verifiable certificates to power your global career.');
    $s.Dispose();
  