// Dobre os números

/* const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const double = numbers.map(value => value * 2);
console.log(double);
 */

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const person = [
    {name: 'Luiz', age: 62},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Letícia', age: 19},
    {name: 'Rosana', age: 32},
    {name: 'Wallace', age: 47}
]

const personName = person.map(obj => obj.name);
const personAge = person.map(obj => ({age: obj.age}));
const withIDs = person.map(function(obj, index) {
    const newObj = {...obj};
    newObj.id = (index + 1) * 1000;
    return newObj;
});

console.log(personName);
console.log(personAge);
console.log(withIDs);











