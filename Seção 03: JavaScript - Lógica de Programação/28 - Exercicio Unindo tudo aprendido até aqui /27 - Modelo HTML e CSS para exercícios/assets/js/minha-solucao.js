const form = document.querySelector('.form');
const result = document.querySelector('.result');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(isEmpty(height.value, weight.value)) {
        if(weightValidator(weight.value) == true && heightValidator(height.value) == true) {
            BMI = calculateBMI(height.value, weight.value);
            showBMI(BMI);
        }
    }
});

function calculateBMI(height, weight) {
    const BMI = weight / (Math.pow(height, 2));
    console.log(BMI);
    return BMI;
}

function weightValidator(value) {
    result.innerHTML = '';
    if (value < 30 || value > 500) {
        result.innerHTML = "Por favor, insira um peso válido";
    } else {
        return true;
    }
}

function heightValidator(value) {
    result.innerHTML = '';

    if (value < 1 || value > 2.8){
        result.innerHTML = "Por favor, insira uma altura válida";
    } else {
        return true;
    }
}

function isEmpty(heightValue, weightValue) {
    result.innerHTML = '';

    if(heightValue == '' && weightValue == '') {
        result.innerHTML = "Por favor, os valores para peso e altura";
    } else if(heightValue == '') {
        result.innerHTML = "Por favor, insira sua altura";
    } else if(weightValue == '') {
        result.innerHTML = "Por favor, insira seu peso";
    } else {
        return true;
    }
}

function showBMI(BMI) {
    result.innnerHTML = '';

    if(BMI < 18.5) {
        result.innerHTML = `Seu IMC é ${BMI.toFixed(2)}, você está abaixo do peso.`;
    } else if(BMI >= 18.5 && BMI <= 24.9) {
        result.innerHTML = `Seu IMC é ${BMI.toFixed(2)}, você está em seu peso normal.`;
    } else if(BMI >= 25 && BMI <= 29.9) {
        result.innerHTML = `Seu IMC é ${BMI.toFixed(2)}, você está com sobrepeso.`;
    } else if(BMI >= 30 && BMI <= 34.9) {
        result.innerHTML = `Seu IMC é ${BMI.toFixed(2)}, você está com obesidade I.`;
    } else if(BMI >= 35 && BMI <= 39.9) {
        result.innerHTML = `Seu IMC é ${BMI.toFixed(2)}, você está com obesidade II.`;
    } else if(BMI >= 40) {
        result.innerHTML = `Seu IMC é ${BMI.toFixed(2)}, você está com obesidade III.`;
    }
}
