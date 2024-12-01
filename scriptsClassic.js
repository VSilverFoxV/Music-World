const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

// Обновление длительности при загрузке метаданных
audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
    seekBar.max = Math.floor(audio.duration);
});

// Воспроизведение и пауза
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
});

// Обновление полосы прокрутки и текущего времени
audio.addEventListener('timeupdate', () => {
    seekBar.value = Math.floor(audio.currentTime);
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Перемотка при изменении полосы прокрутки
seekBar.addEventListener('input', () => {
    audio.currentTime = seekBar.value;
});

// Форматирование времени в формате минут:секунд
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Сброс кнопки при окончании трека
audio.addEventListener('ended', () => {
    playPauseBtn.textContent = '▶️';
});



// Добавляем функционал для скрытия/показа блока
document.getElementById('toggle-btn').addEventListener('click', function() {
    const aside = document.getElementById('sidebar');
    aside.classList.toggle('hidden');
});









