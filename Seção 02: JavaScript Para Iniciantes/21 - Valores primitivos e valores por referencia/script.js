/*
    Primitivos (imutáveis) -
        string, number, boolean, undefined, null, bigint e symbol -> Valor

    Referência (mutável) -
        array, object e function -> Passados por referência
*/


const personOne = {
    name: 'Robson',
    surname: 'Soares',
};

const personTwo = {...personOne};

personOne.name = 'João'
console.log(personOne);
console.log(personTwo);

















// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(a, c);




// let a = 'A';
// let b = a; // Cópia

// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b)

// let personName = 'Rob';
// personName[0] = 'L';
// console.log(personName[0]);








