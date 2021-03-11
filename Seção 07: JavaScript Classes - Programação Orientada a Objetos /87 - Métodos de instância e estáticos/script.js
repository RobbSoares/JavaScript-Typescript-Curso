
function test() {
    console.log('Isso é um teste');
}


class RemoteControl {
    constructor(television) {
        this.television = television;
        this.volume = 0;
        test();
    }

    // Método de instância
    turnUpVolume() {
        this.volume += 2;
    }

    turnDownVolume() {
        this.volume -= 2;
    }

    // Método estático
    static sum(x, y) {
        return x + y;
    }
}

const control = new RemoteControl('LG');

control.turnUpVolume();
control.turnUpVolume();
control.turnUpVolume();
console.log(control);

console.log(RemoteControl.sum(2, 5));



