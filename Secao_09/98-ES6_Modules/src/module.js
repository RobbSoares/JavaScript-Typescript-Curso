export const name = 'Rob';
export const surname = 'Soares';
export const age = 20;


export function sum(x, y) {
    return x + y;
}

export default class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

// export {name as myName, surname, age, sum};