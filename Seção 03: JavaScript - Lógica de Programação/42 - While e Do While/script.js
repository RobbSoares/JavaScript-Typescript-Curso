function random(min, max) {
    const randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
}

const min = 1;
const max = 50;

let rand = random(min, max);
let count = 0;

while(rand !== 10) {
    console.log(rand);
    rand = random(min, max)
}

do {
    console.log(rand);
} while(rand !== 10);






/* nome = 'Rob'

let control = 0;

while(control < nome.length) {  
    console.log(nome[control]);
    control++;
}

console.log('segue a vida...');

 */
