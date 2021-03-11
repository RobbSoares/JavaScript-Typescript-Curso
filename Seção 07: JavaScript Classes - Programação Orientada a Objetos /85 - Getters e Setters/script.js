class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(value) {
        value = value.split(' ');
        this.name = value.shift();
        this.surname = value.join(' ');
    }
}

const personOne = new Person('Rob', 'Soares');
personOne.fullName = 'Rob Soares';
console.log(personOne.name);
console.log(personOne.surname);




/* const _velocity = Symbol('velocidade');


class Car {
    constructor(name) {
        this.name = name;
        this[_velocity] = 0;
    }
    
    set velocity(value) {
        console.log('SETTER');
        if(typeof value != 'number') return;
        if(value >= 100 || value <= 0) return;
        this[_velocity] = value;
    }
    
    get velocity() {
        console.log('GETTER');
        return this[_velocity];
    }

    accelerate() {
        if(this[_velocity] >= 100) return;
        this[_velocity]++;
    }

    stop() {
        if(this[_velocity] <= 0) return;
        this[_velocity]--;
    }
}

const carOne = new Car('Fusca');

for(let i = 0; i <= 60; i++) {
    carOne.accelerate();
}


carOne.velocity = 50
console.log(carOne.velocity);
 */


