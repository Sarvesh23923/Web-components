const progress = document.querySelector('.progress');
const backBtn = document.querySelector('.back');
const nextBtn = document.querySelector('.next');
const circles = document.querySelectorAll('.circle');

let activeIndex = 1;

nextBtn.addEventListener('click', () => {
    activeIndex++;
    if(activeIndex > circles.length){
        activeIndex = circles.length;
    }
    updateProgress();
});

backBtn.addEventListener('click', () => {
    activeIndex--;
    if(activeIndex < 1){
        activeIndex = 1;
    }
    updateProgress();
})

const updateProgress = () => {
    circles.forEach((circle, index) => {
        if(index < activeIndex){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(actives.length === 1){
        backBtn.disabled = true;
    }
    else if(actives.length === circles.length){
        nextBtn.disabled = true;
    }
    else{
        backBtn.disabled = false;
        nextBtn.disabled = false;
    }
}