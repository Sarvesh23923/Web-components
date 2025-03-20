const input = document.querySelector('input');
const eye = document.querySelector('.eye-container i');

eye.addEventListener('click', () => {
    if(input.type === 'password'){
        input.type = 'text';
    }
    else{
        input.type = 'password';
    }
})