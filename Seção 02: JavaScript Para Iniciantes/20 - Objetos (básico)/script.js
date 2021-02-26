const personOne = {
    name: 'Rob',
    surname: 'Soares',
    age: 19,

    speak() {
        console.log(`A minha idade atual é ${this.age}`);
    },

    increasesAge() {
        this.age++;
    }


};

personOne.speak();
personOne.increasesAge();
personOne.speak();
personOne.increasesAge();
personOne.speak();
personOne.increasesAge();
personOne.speak();



















// function createPerson (name, surname, age) {
//     return { name, surname, age };
// }


// const personOne = createPerson('Robson', 'Soares', 19);
// const personTwo = createPerson('Thaís', 'Oliveira', 26);
// const personThree = createPerson('Alexa', 'Silverhand', 20);
// const personFour = createPerson('Watson', 'Quicksilver', 32);

// console.log(personOne.name, personTwo.name, personThree.name);








// const personOne = {
//     name: 'Robson',
//     surname: 'Soares',
//     age: 19
// };

// const personTwo = {
//     name: 'José',
//     surname: 'Oliveira',
//     age: 56
// };

// console.log(personOne.name);
// console.log(personTwo.name);
