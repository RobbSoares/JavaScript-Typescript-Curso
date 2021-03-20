const path = require('path');
const axios = require('axios');
const {Person} = require('./mod');

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e))

const personOne = new Person('Jão');

console.log(personOne);







// const personOne = new Person('Rob');
// console.log(personOne);



// const {name, surname, sayName} = require('./mod');

// console.log(name, surname);
// console.log(sayName());




