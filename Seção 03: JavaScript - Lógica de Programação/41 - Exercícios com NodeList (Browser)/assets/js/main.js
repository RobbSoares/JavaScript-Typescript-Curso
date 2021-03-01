const paragraph = document.querySelector('.paragraph');
const pElement = document.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;

console.log(backgroundColorBody)

for(let p of pElement) {
    p.style.padding = '15px';
    p.style.borderRadius = '10px';
    p.style.color = 'rgb(255, 255, 255)';
    p.style.backgroundColor = backgroundColorBody;
}























