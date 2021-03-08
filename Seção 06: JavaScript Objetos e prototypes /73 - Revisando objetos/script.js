
// Factory functions / Constructor functions / Classes
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    Object.freeze(this); // trava o objeto
}

// {} <- this
const personOne = new Person('Rob', 'Soares');
personOne.name = 'Luiz';
console.log(personOne);





/* function createPerson(name, surname) {
return {
    name, 
    surname,
    get fullName() {
        return `${this.name} ${this.surname}`
    }
};
} */


/* 
const personOne = createPerson('Rob', 'Soares');
console.log(personOne.fullName); */















/* 
const personOne = new Object();

personOne.name = 'Rob';
personOne.surname = 'Soares';
personOne.age = 20;

personOne.sayName = function() {
    return (`${this.name} está falando seu nome`);
};

personOne.getBirthDate = function() {
    const currentDate = new Date();
    return currentDate.getFullYear() - this.age;
}
for(let key in personOne) {
    console.log(personOne[key]);
} */


// delete personOne.name;
// console.log(personOne);




/* const personOne = new Object();
personOne.name = 'Rob';
personOne.surname = 'Soares';

console.log(personOne.name)


const personTwo = {
    name: 'Luiz',
    surname: 'Otávio'
} */


/* const person = {
    name: 'Rob',
    surname: 'Soares'
};

const key = 'name';
console.log(person[key]); */

/* console.log(person.name);
console.log(person['surname']); */






















