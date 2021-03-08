// Retorne os números maiores que 10
// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

/* const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filtredNumber = numbers.filter(value => value > 10);
console.log(filtredNumber); */




/* Pegando números maiores que 10 sem utilizar o filter: 
const numberGreaterThanTen = [];

for( value of numbers) {
    if(value > 10) {
        numberGreaterThanTen.push(value);
    }
}

console.log(numberGreaterThanTen); */





// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'A'

const person = [
    {name: 'Luiz', age: 62},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Letícia', age: 19},
    {name: 'Rosana', age: 32},
    {name: 'Wallace', age: 47},
];

const personWithBigName = person.filter(obj => obj.name.length >= 5);
const personWithMoreThanFiftyYears = person.filter(obj => obj.age > 50);
const nameFinishWithA = person.filter(obj => obj.name.toLowerCase().endsWith('a'))

console.log(personWithBigName);
console.log(personWithMoreThanFiftyYears);
console.log(nameFinishWithA);
