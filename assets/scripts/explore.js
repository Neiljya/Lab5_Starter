// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    const textToSpeak = textInput.value;

    if (textToSpeak !== '' && voiceSelect.value !== 'select') {
      const utterThis = new SpeechSynthesisUtterance(textToSpeak);
      const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedVoiceName) {
          utterThis.voice = voices[i];
          break;
        }
      }

      utterThis.addEventListener('start', () => {
        faceImage.src = 'assets/images/smiling-open.png';
      });

      utterThis.addEventListener('end', () => {
        faceImage.src = 'assets/images/smiling.png';
      });

      synth.speak(utterThis);
    }
  });
}