// Declaração de função (Function hoisting)

function sayHi() {
    console.log('Oi');
}

// First-class objects (objetos de primeira classe)
// Function expression
const amAData = function() {
    console.log('Sou um dado');
};

function execFunction(func) {
    func();
}

amAData();

// Arrow function

const arrowFunction = () => console.log('Sou uma arrow function');
arrowFunction();

// Dentro de um objeto

const object = {
    speak() {
        console.log('Estou falando...');
    }
};

object.speak();






