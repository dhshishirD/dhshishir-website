
    Add-Type -AssemblyName System.Speech;
    $s = New-Object System.Speech.Synthesis.SpeechSynthesizer;
    $voices = $s.GetInstalledVoices();
    $chosen = $voices | Where-Object { $_.VoiceInfo.Name -like "*Zira*" } | Select-Object -First 1;
    if ($chosen) { $s.SelectVoice($chosen.VoiceInfo.Name) }
    $s.Rate = 0;
    $s.SetOutputToWaveFile('E:/dhshishir-website/scripts/temp_video_build/voice_6.wav');
    $s.Speak('Unlock your global potential today. Visit dhshishir dot com. Practice freely, prepare smartly, and achieve your dream band score.');
    $s.Dispose();
  