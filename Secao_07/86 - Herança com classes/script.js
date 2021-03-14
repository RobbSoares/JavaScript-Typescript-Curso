class ElectronicDevice {
    constructor(name) {
        this.name = name;
        this.on = false;
    }

    turnOn() {
        if(this.on) {
            console.log(`${this.name} já ligado`)
            return;
        }

        this.on = true;
    }

    turnOff() {
        if(!this.on) {
            console.log(`${this.name} já desligado`)
            return;
        }

        this.on = false;
    }
}

class Smartphone extends ElectronicDevice {
    constructor(name, color, model) {
        super(name);
        this.color = color;
        this.model = model;
    }
}

class Tablet extends ElectronicDevice {
    constructor(name, haveWifi) {
        super(name);
        this.haveWifi = haveWifi;
    }

    turnOn() {
        console.log('Olha, você alterou o método ligar');
    }

    sayHi() {
        console.log('Hi!');
    }
}


const smartphone = new Smartphone('Xiaomi', 'Black', 'Redmi');
console.log(smartphone);

const tablet = new Tablet('iPad', true);
tablet.turnOn();
tablet.sayHi();
