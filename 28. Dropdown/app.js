const selectField = document.querySelector('.select-field');
const selectText = document.querySelector('.select-text');
const arrowIcon = document.querySelector('.select-field img');
const list = document.querySelector('.list');
const options = document.querySelectorAll('.options');

selectField.addEventListener('click', () => {
    list.classList.toggle('show');
    arrowIcon.classList.toggle('rotate');
});

options.forEach(option => {
    option.onclick = event => {
        selectText.innerHTML = event.target.textContent;
        list.classList.toggle('show');
        arrowIcon.classList.toggle('result');
    }
})