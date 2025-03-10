// Access DOM elements
const finalPhoto1 = document.getElementById('finalPhoto1');
const finalPhoto2 = document.getElementById('finalPhoto2');
const finalPhoto3 = document.getElementById('finalPhoto3');
const logoContainer = document.getElementById('logo');
const logos = ['blackpink.png', 'bts.png', 'nct127.png', 'aespa.png', 'enhypen.png', 'txt.png', 'straykids.png', 'kasteye.png', 'ateez.png', 'tws.png', 'boynextdoor.png', 'sserafim.png'];
let logoIndex = 0;

// Retrieve stored photos
const photo1 = sessionStorage.getItem('photo1');
const photo2 = sessionStorage.getItem('photo2');
const photo3 = sessionStorage.getItem('photo3');

// Display images if they exist
if (photo1) finalPhoto1.style.backgroundImage = `url(${photo1})`;
if (photo2) finalPhoto2.style.backgroundImage = `url(${photo2})`;
if (photo3) finalPhoto3.style.backgroundImage = `url(${photo3})`;

// Logo change functionality
document.getElementById('changeLogoButton').addEventListener('click', () => {
    logoIndex = (logoIndex + 1) % logos.length;
    logoContainer.src = `logos/${logos[logoIndex]}`;
});

document.getElementById("retakePhotosButton").addEventListener("click", function() {
    window.location.href = "index.html"; // Change "index.html" to your first page filename if different
});
