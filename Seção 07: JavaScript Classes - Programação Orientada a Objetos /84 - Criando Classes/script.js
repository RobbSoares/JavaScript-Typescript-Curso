class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    speak() {
        console.log(`${this.name} está falando.`);
    }
}

const personOne = new Person('Rob', 'Soares');
console.log(personOne);
