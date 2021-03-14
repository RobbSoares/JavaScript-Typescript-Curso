const speak = {
    speak() {
        console.log(`${this.name} está falando.`);
    }
}

const eat = {
    eat() {
        console.log(`${this.name} está comendo.`);
    }
}

const drink = {
    drink() {
        console.log(`${this.name} está bebendo.`);
    }
}

const personPrototype = Object.assign({}, speak, eat, drink);

function createPerson(name, surname) {

    
    return Object.create(personPrototype, {
        name: {value: name},
        surname: {value: surname}
    });
}

const personOne = createPerson('Rob', 'Soares');
personOne.speak();




