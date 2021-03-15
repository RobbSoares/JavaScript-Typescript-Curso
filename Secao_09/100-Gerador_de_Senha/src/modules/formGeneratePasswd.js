import generatePassword from './generators'

const genPasswd = document.querySelector('.generated-password');
const qtdChar = document.querySelector('.qtd-char');
const uppercase = document.querySelector('.chk-uppercase');
const lowercase = document.querySelector('.chk-lowercase');
const numbers = document.querySelector('.chk-numbers'); 
const symbols = document.querySelector('.chk-symbol'); 
const btnGeneratePasswd = document.querySelector('.generate-passwd')


export default () => {
    btnGeneratePasswd.addEventListener('click', () => {
        genPasswd.innerHTML = generate();
    });
};

function generate() {
    const password = generatePassword(
        qtdChar.value, 
        uppercase.checked,
        lowercase.checked,
        numbers.checked,
        symbols.checked
        );

    return password || 'Nada selecionado';
}



