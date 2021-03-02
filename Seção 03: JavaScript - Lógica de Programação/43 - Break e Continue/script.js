const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// continue -> continua para a próxima iteração
// Break sai do laço

for(let number in numbers) {
    if(number === 2) {
        console.log('Pulei o número 2');
        continue;
    }
    
    console.log(number);

    if(number === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
}

