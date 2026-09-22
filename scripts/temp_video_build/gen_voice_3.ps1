
    Add-Type -AssemblyName System.Speech;
    $s = New-Object System.Speech.Synthesis.SpeechSynthesizer;
    $voices = $s.GetInstalledVoices();
    $chosen = $voices | Where-Object { $_.VoiceInfo.Name -like "*Zira*" } | Select-Object -First 1;
    if ($chosen) { $s.SelectVoice($chosen.VoiceInfo.Name) }
    $s.Rate = 0;
    $s.SetOutputToWaveFile('E:/dhshishir-website/scripts/temp_video_build/voice_3.wav');
    $s.Speak('Master all four skills. Analyze Band 9 essays with our AI writing examiner, conquer complex reading passages, and build elite vocabulary with our smart cloud synchronized flashcards.');
    $s.Dispose();
  