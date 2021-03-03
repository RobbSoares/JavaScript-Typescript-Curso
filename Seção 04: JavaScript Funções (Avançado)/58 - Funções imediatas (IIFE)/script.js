// IIFE -> Immediately Invoked Function expression

(function(age, weight, height) {
    const surname = 'Soares';

    function createName(name) {
        return name + ' ' + surname;
    }

    function sayName() {
        console.log(createName('Rob'));
    }

    sayName();
    console.log(age, weight, height);
})(19, 50, 1.68);