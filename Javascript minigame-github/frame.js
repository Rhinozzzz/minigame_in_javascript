// frame.js

let isZoomed = false;

function applyZoom() {
  const gameFrame = document.getElementById('game-frame');
  gameFrame.classList.toggle('zoomed', isZoomed);
  gameFrame.style.transform = isZoomed ? 'scale(0.5)' : 'none';
}

function toggleZoom() {
  isZoomed = !isZoomed;
  applyZoom();
}

document.getElementById('zoom-btn').addEventListener('click', toggleZoom);
