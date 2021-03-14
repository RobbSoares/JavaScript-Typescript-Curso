const myNumber = Number(prompt('Digite um número'));
const titleNumber = document.getElementById('title-number');
const text = document.getElementById('text');

titleNumber.innerHTML = myNumber;
text.innerHTML += `<p>Seu número +2 é ${myNumber + 2}</p>`;
text.innerHTML += `<p>Raiz quadrada: ${myNumber ** 0.5}</p>`
text.innerHTML += `<p>${myNumber} é inteiro: ${Number.isInteger(myNumber)}</p>`
text.innerHTML += `<p>É NaN: ${Number.isNaN(myNumber)}</p>`
text.innerHTML += `<p>Arredondando para baixo: ${Math.floor(myNumber)}</p>`
text.innerHTML += `<p>Arredondando para cima: ${Math.ceil(myNumber)}</p>`
text.innerHTML += `<p>Com duas casas decimais: ${myNumber.toFixed(2)}</p>`
