function showServices() {
  document.getElementById('home-view').style.display = 'none';
  document.getElementById('services-view').style.display = 'block';
  window.scrollTo(0, 0);
}

function hideServices() {
  document.getElementById('home-view').style.display = 'block';
  document.getElementById('services-view').style.display = 'none';
}

function openGallery() {
  document.getElementById('gallery-modal').style.display = 'block';
}

function closeGallery() {
  document.getElementById('gallery-modal').style.display = 'none';
}

function expandImage(img) {
  const fullModal = document.getElementById('full-image-modal');
  const fullImg = document.getElementById('expanded-img');
  fullModal.style.display = 'flex';
  fullImg.src = img.src;
}