//Algorithm:
//1. Select all of the labels.
//2. Loop through every labels.
//3. Split the label into individual characters
//4. Mapping over each letters and wrap it in a span.
//5/ Join the characters back together.

const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerHTML.split('')
    .map((letter, index) => 
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    ).join('')
})