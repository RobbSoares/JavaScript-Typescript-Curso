module.exports = class Cat {
    constructor(name) {
        this.name = name;
    }

    meaw() {
        console.log(`${this.name} está falando miau`);
    }
}

