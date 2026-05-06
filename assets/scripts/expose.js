// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const imageElement = document.querySelector('#expose img');
  const audioElement = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    imageElement.src = `assets/images/${selectedHorn}.svg`;
    imageElement.alt = selectedHorn;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeSlider.addEventListener('input', (event) => {
    const volumeValue = parseInt(event.target.value);
    audioElement.volume = volumeValue / 100;
    if (volumeValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue >= 1 && volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue >= 33 && volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else if (volumeValue >= 67) {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}