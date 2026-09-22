
    Add-Type -AssemblyName System.Speech;
    $s = New-Object System.Speech.Synthesis.SpeechSynthesizer;
    $voices = $s.GetInstalledVoices();
    $chosen = $voices | Where-Object { $_.VoiceInfo.Name -like "*Zira*" } | Select-Object -First 1;
    if ($chosen) { $s.SelectVoice($chosen.VoiceInfo.Name) }
    $s.Rate = 0;
    $s.SetOutputToWaveFile('E:/dhshishir-website/scripts/temp_video_build/voice_2.wav');
    $s.Speak('Practice real speaking cue cards with our live AI speech recognition engine. Speak directly into your microphone and get instant scoring on fluency, pronunciation, grammar, and vocabulary.');
    $s.Dispose();
  