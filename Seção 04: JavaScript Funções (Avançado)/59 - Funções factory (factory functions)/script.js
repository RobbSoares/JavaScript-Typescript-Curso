
// Factory function

function createPerson(name, surname, height, weight) {
    return {
        name, 
        surname,

        // getter
        get fullName() {
            return `${this.name} ${this.surname}`;
        },

        // setter
        set fullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.surname = value.join(' ');

        },

        say(subject) {
            return `${this.name} está ${subject}.`;
        },

        height,
        weight,

        get imc() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        }
    };
}

const personOne = createPerson('Rob', 'Soares', 1.68, 50);
personOne.fullName = 'Robson Santana Soares'
console.log(personOne.fullName);
console.log(personOne.imc);
console.log(personOne.say('falando sobre JS'))















