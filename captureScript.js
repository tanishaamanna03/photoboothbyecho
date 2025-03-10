// Access DOM elements
const captureButton = document.getElementById('captureButton');
const generateStripButton = document.getElementById('generateStripButton');
const photo1 = document.getElementById('photo1');
const photo2 = document.getElementById('photo2');
const photo3 = document.getElementById('photo3');
const countdownDisplay = document.getElementById('countdown'); // Countdown timer display
let photoCount = 0;

// Initialize the webcam video stream
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        const video = document.getElementById('video');
        video.srcObject = stream;
    })
    .catch(err => console.log("Error accessing webcam: " + err));

// Capture image with countdown
captureButton.addEventListener('click', () => {
    if (photoCount < 3) {
        let countdownTime = 3;
        countdownDisplay.textContent = countdownTime + " seconds";

        const countdownInterval = setInterval(() => {
            countdownTime--;
            countdownDisplay.textContent = countdownTime + " seconds";
            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = "Say Cheese! 📸";
                capturePhoto(); // Capture photo when countdown ends
            }
        }, 1000);
    }
});

// Function to capture photo from video
function capturePhoto() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const video = document.getElementById('video');

    canvas.width = 1024;
    canvas.height = 768;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Set the captured image to the photo box
    let photoBox = document.getElementById(`photo${photoCount + 1}`);
    const imageData = canvas.toDataURL(); // Convert to Base64

    photoBox.style.backgroundImage = `url(${imageData})`;
    photoBox.style.backgroundSize = 'cover';
    photoBox.style.backgroundPosition = 'center';
    photoBox.style.border = '2px solid black';

    photoCount++;

    if (photoCount === 3) {
        generateStripButton.style.display = 'block';
    }
}

// Save images and redirect to final page
generateStripButton.addEventListener('click', () => {
    // Extract only the Base64 data from background images
    sessionStorage.setItem('photo1', photo1.style.backgroundImage.replace('url("', '').replace('")', ''));
    sessionStorage.setItem('photo2', photo2.style.backgroundImage.replace('url("', '').replace('")', ''));
    sessionStorage.setItem('photo3', photo3.style.backgroundImage.replace('url("', '').replace('")', ''));

    window.location.href = 'finalPhotoStrip.html';
});
