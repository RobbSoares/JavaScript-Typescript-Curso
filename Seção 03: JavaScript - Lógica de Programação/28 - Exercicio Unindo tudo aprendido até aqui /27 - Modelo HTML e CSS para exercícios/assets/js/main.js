// Capturar evento de submit do formulaŕio

const form = document.querySelector('.form');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if(!weight) {
        setResult('Peso inválido', false);
        return;
    }

    if(!height) {
        setResult('Altura inválida', false);
        return;
    }

    const imc = getIMC(weight, height);
    const IMCIndex = getIMCIndex(imc);
    const message = `Seu IMC é ${imc} (${IMCIndex})`;

    setResult(message, true);
});

function getIMCIndex(imc) {
    const index = [
        'Abaixo o peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade I',
        'Obesidade II',
        'Obesidade III'
    ];

    if(imc >= 39.9) return index[5];
    if(imc >= 34.9) return index[4];
    if(imc >= 29.9) return index[3];
    if(imc >= 24.9) return index[2];
    if(imc >= 18.5) return index[1];
    if(imc < 18.5) return index[0];
}

function getIMC(weight, height) {
    const imc = weight / Math.pow(height, 2);
    return imc.toFixed(2);
}

function createParagraph() {
    const paragraph = document.createElement('p');
    return paragraph;
}

function setResult (message, isValid) {
    const result = document.querySelector('.text');
    result.innerHTML = '';


    const p = createParagraph();
    p.innerHTML = message;

    if(isValid) {
        p.classList.add('paragraph-result');
    } else {
        p.classList.add('bad')
    }

    result.appendChild(p);
}
