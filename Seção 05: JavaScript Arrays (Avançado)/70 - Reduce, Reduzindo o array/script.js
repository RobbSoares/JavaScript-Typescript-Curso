// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numbers.reduce(function(accumulator, value) {
//     if(value % 2 === 0) accumulator += value;
//     return accumulator;
// }, 0);

// console.log(total);


// Retorne a pessoa mais velha

const person = [
    {name: 'Luiz', age: 62},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Letícia', age: 10},
    {name: 'Rosana', age: 64},
    {name: 'Wallace', age: 63}
]

const older = person.reduce(function(accumulator, value) {
    if(accumulator.age > value.age) {
        console.log(accumulator);
        return accumulator;
    }
    return value
});

console.log(older);



/* const pairFilter = numbers.filter(value => value % 2 == 0);
console.log(pairFilter)

const double = numbers.map(value => value * 2);
console.log(double); */