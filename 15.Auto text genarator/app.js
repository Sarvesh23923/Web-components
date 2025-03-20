const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

let words = ['Flutter Dev', 'Web dev', 'Motion Graphics', 'Video Editor'];

const typeDelay = 100, eraserDelay = 200, newWordDelay = 500;
let index = 0, charIndex = 0, isErasing = false;

const typeEffect = () => {
    let currentWord = words[index];
    typedText.textContent = currentWord.substring(0, charIndex);

    if(!isErasing && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, typeDelay);
    }

    else if(isErasing && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, eraserDelay);
    }

    else{
        isErasing = !isErasing;
        if(!isErasing) index = (index + 1) % words.length;
        setTimeout(typeEffect, newWordDelay);
    }
}

document.addEventListener('DOMContentLoaded', setTimeout(typeEffect, newWordDelay));