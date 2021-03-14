const userName = prompt('Digite seu nome completo');
const nameLength = userName.replace(/\s/g, '').length;


document.body.innerHTML = `O seu nome é: <strong>${userName}</strong><br>`;

document.body.innerHTML += `Seu nome tem <strong>${nameLength}</strong> letras <br>`;

document.body.innerHTML += `A segunda letra do seu nome é '<strong>${userName.charAt(1)}</strong>'<br>`;

document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? <strong>${userName.indexOf('a')}</strong><br>`;

document.body.innerHTML += `Qual o último índice da leta a no seu nome? <strong>${userName.lastIndexOf('a')}</strong> <br>`;

document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${userName.slice(-3, userName.length)}</strong><br>`;

document.body.innerHTML += `As palavras do seu nome são <strong>${userName.split(' ').join(', ')}</strong><br>`;

document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${userName.toUpperCase()}</strong> <br>`;

document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${userName.toLowerCase()}</strong> <br>`;