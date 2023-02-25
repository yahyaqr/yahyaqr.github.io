// Dropdown Navigation

const dropdownToggles = document.querySelectorAll('nav li');

dropdownToggles.forEach((toggle) => {
  const dropdown = toggle.querySelector('.dropdown');

  if (dropdown) {
    toggle.addEventListener('click', () => {
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
      } else {
        dropdown.style.display = 'block';
      }
    });

    toggle.addEventListener('mouseleave', () => {
      dropdown.style.display = 'none';
    });
  }
});

// Profile Image Slider

const profilePicture = document.getElementById('profile-picture');
const overlay = document.querySelector('.overlay');

const images = [
  './src/img/profil.webp',
  './src/img/profil2.webp',
  './src/img/profil3.webp',
  './src/img/profil4.webp',
];
let imageIndex = 0;

overlay.addEventListener('click', () => {
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  profilePicture.src = images[imageIndex];
});

// Aside's Identity

const aside = document.querySelector('#aside');
const identity = document.querySelector('.identity');
const identityPicture = document.getElementById('identity-picture');

window.addEventListener('scroll', () => {
  if (aside.getBoundingClientRect().top <= 20) {
    identity.classList.add('show');
  } else {
    identity.classList.remove('show');
  }
});

function changeImage() {
  imageIndex = (imageIndex + 1) % images.length;
  identityPicture.src = images[imageIndex];
}

setInterval(changeImage, 10000);
