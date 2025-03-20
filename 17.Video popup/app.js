const button = document.querySelector('.btn');
const closeIcon = document.querySelector('.close');
const trailerContainer = document.querySelector('.trailer-container');
const trailer = document.querySelector('video');

button.addEventListener('click', () => {
    trailerContainer.classList.remove('active');
});

closeIcon.addEventListener('click', () => {
    trailerContainer.classList.add('active');
    trailer.pause();
    trailer.currentTime = 0;
})