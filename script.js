let totalSeconds = 0;
let interval = null;

function updateDisplay() {
  const display = document.getElementById('timerDisplay');
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (interval !== null) return; // Prevent multiple intervals

  const minInput = document.getElementById('minutes');
  const secInput = document.getElementById('seconds');

  if (totalSeconds === 0) {
    const minutes = parseInt(minInput.value) || 0;
    const seconds = parseInt(secInput.value) || 0;
    totalSeconds = minutes * 60 + seconds;
  }

  interval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      clearInterval(interval);
      interval = null;
      alert("Time's up!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  totalSeconds = 0;
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
  updateDisplay();
}

// Initialize display
updateDisplay();
