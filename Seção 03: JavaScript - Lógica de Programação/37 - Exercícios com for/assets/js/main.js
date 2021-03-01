const elements = [
    {tag: 'p', text: 'Lorem ipsum cartj amen'},            // 0 
    {tag: 'div', text: 'Frase II'},         // 1    
    {tag: 'section', text: 'Frase III'},    // 2
    {tag: 'footer', text: 'Frase IV'}       // 3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let {tag, text} = elements[i];
    let createdTag = document.createElement(tag);
    let createdText = document.createTextNode(text);
    createdTag.appendChild(createdText);
    div.appendChild(createdTag);
    // createdTag.innerText = text;
    // createdTag.innerHTML = text;
}

container.appendChild(div);