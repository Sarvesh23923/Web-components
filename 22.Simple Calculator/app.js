const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    let num1 = document.querySelector('.num-1').value;
    let num2 = document.querySelector('.num-2').value;
    let result = document.querySelector('.result');
    let options = document.querySelector('#options').value;

    switch(options){
        case 'add':
            result.innerHTML = Number(num1) + Number(num2);
            break;

        case 'sub':
            result.innerHTML = Number(num1) - Number(num2);
            break;

        case 'mul':
            result.innerHTML = Number(num1) * Number(num2);
            break;

        case 'div':
            result.innerHTML = Number(num1) / Number(num2);
            break;
    }
})