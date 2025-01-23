const image = document.getElementById('interactiveImage');
let scale = 1;

// Event listener untuk mengganti warna berdasarkan ukuran gambar
image.addEventListener('wheel', (event) => {
  event.preventDefault();

  // Zoom in atau out berdasarkan scroll
  if (event.deltaY < 0) {
    scale += 0.1; // Perbesar
  } else {
    scale -= 0.1; // Perkecil
    if (scale < 0.5) scale = 0.5; // Batas minimum zoom
  }

  // Terapkan transformasi dan filter warna berdasarkan ukuran
  image.style.transform = `scale(${scale})`;

  if (scale >= 1.5) {
    // Color for Zoom big
    image.style.filter = 'hue-rotate(90deg)';
  } else if (scale < 1) {
    // Color for Zoom small
    image.style.filter = 'hue-rotate(270deg)';
  } else {
    // Warna default
    image.style.filter = 'none';
  }
});
