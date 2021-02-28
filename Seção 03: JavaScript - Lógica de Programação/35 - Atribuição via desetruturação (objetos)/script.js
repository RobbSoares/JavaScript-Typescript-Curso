const person = {
    nome: 'Rob',
    surname: 'Soares',
    age: 19,
    address: {
        street: 'Av. Edmilson Rodrigues Marcelino',
        number: 44
    }
};

// Atribuição via desestruturação
const {nome, surname, ...rest} = person;

console.log(nome, rest);






/* 
const {address: {street, number}, address} = person;
console.log(street, number, address); */