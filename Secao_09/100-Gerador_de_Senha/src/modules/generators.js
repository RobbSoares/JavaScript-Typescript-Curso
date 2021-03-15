const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUpperCase = () => String.fromCharCode(rand(65, 91));
const generateLowerCase = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));

const symbols = ',.;~^$%#@!&*()[]-+*=_';
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(qtd, uppercase, lowercase, numbers, symbols) {
    const arrayPasswd = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        uppercase && arrayPasswd.push(generateUpperCase());
        lowercase && arrayPasswd.push(generateLowerCase());
        numbers && arrayPasswd.push(generateNumber());
        symbols && arrayPasswd.push(generateSymbol());
    }

    return arrayPasswd.join('').slice(0, qtd);
}

generatePassword(10, true);
