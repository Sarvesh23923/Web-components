const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-container');

openBtn.addEventListener('click', () => modal.classList.add('show'));
closeBtn.addEventListener('click', () => modal.classList.remove('show'));