const tshirts = document.querySelectorAll('.clothe');
let currentIndex = 0;

function displayCurrentTshirt() {
    tshirts.forEach(tshirt => tshirt.style.display = 'none');
    tshirts[currentIndex].style.display = 'block';
}

function showNextTshirt() {
    currentIndex = (currentIndex + 1) % tshirts.length;
    displayCurrentTshirt();
}

function showPrevTshirt() {
    currentIndex = (currentIndex - 1 + tshirts.length) % tshirts.length;
    displayCurrentTshirt();
}

displayCurrentTshirt();

document.getElementById('Prev-clothe').addEventListener('click', showPrevTshirt);
document.getElementById('Next-clothe').addEventListener('click', showNextTshirt);

let angle = 0;
const image = document.getElementById("logoDNA");

function rotateImage() {
    angle += 1;
    image.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotateImage);
}

rotateImage();