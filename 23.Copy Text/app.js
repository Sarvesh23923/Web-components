const copyText = document.querySelector('textarea[name=copy]');
const finalText = document.querySelector('textarea[name=finaltext]');
const copyBtn = document.querySelector('.copy');
const moveBtn = document.querySelector('.move');
const output = document.querySelector('.output');

copyBtn.addEventListener('click', () => {
    let temp = copyText.value;
    copyToClip(temp);
});

moveBtn.addEventListener('click', () => {
    let temp = copyText.value;
    finalText.value = temp;
})

copyText.addEventListener('click', (e) => e.target.select());
finalText.addEventListener('click', (e) => e.target.select());

const copyToClip = (str) => {
    const outputContainer = document.querySelector('.output-container');
    const textarea = document.createElement('textarea');
    textarea.value = str;
    outputContainer.appendChild(textarea);
    textarea.select();
    navigator.clipboard.writeText(str);
    outputContainer.removeChild(textarea);
    output.innerHTML = `<h3>Content copied</h3>`;
    output.classList.add('added');

    setTimeout(() => {
        output.classList.toggle('added');
    })
}