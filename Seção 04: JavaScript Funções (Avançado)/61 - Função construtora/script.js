// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa

function Person(name, surname) {
    // Atributos ou métodos privados
    const ID = 123456;

    const internMethod = function() {

    };

    // Atributos ou métodos públicos
    this.name = name;
    this.surname = surname;

    this.method = function() {
        console.log(this.name + ': sou um método');
    }
}

const personOne = new Person('Robson', 'Soares');
const personTwo = new Person('Maria', 'Silva');

console.log(personOne.name);
console.log(personTwo.name);
personTwo.method();