// arguments -> sustenta todos  os argumentos enviados

/* function funcao() {
    let total = 0;
    for(let argument of arguments) {
        total += argument;
    }
    console.log(total);
}    

funcao(1, 2, 3, 4, 5, 6, 7); */

/* function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}    

funcao(1, 2, 3);  */

/* function funcao(a, b = 2, c = 4) {
    // b = b || 0;
    console.log(a + b + c);
}    

// funcao(2, 10); 
funcao(2, undefined, 6); */

/* function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

funcao({nome: 'Rob', sobrenome: 'Soares', idade: 19});
 */

/*  function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {
    nome: 'Rob', 
    sobrenome: 'Soares', 
    idade: 19
}

funcao(obj); */

/* function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao(['Rob', 'Soares', 19]);
*/

/* const count = function (operator, accumulator, ...numbers) {
    for(let number of numbers) {
        if(operator === '+') accumulator += number;
        if(operator === '-') accumulator -= number;
        if(operator === '/') accumulator /= number;
        if(operator === '*') accumulator *= number;
    }

    console.log(accumulator);
}


count('+', 1, 20, 30, 40, 50) */

/* const count = function (operator, accumulator, ...numbers) {
    console.log(arguments);
};

count('+', 1, 20, 30, 40, 50)

 */



const count = (...args) => {
    console.log(args);
};

count('+', 1, 20, 30, 40, 50);





