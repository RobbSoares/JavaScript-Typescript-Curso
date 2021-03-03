// return 
// Retorna um valor
// Termina a função

/* function sum(a, b) {
   return a + b;
}

function sum2(a, b) {
    console.log(a + b);
}

sum2(5, 2);

 */

/* document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
}); */

/* function createPerson(name, surname) {
    return {
        name, surname
    };
}

const personOne = createPerson('Rob', 'Soares');
console.log(typeof personOne);
 */




/* function sayPhrase(start) {
    function sayTheRest(rest) {
        return start + ' ' + rest;
    }

    return sayTheRest;
}

const say = sayPhrase('Hey');
const rest = say('World')
console.log(rest); */

/* function double(number) {
    return number * 2;
}

function triples(number) {
    return number * 3;
}

function quadruples(number) {
    return number * 4;
}


console.log(double(2));
console.log(triples(2));
console.log(quadruples(2));
 */


function createMultiplier(multiplier) {
    // multiplicador
    return function(n){
        return n * multiplier;
    };
}

const double = createMultiplier(2);
const triples = createMultiplier(3);
const quadruples = createMultiplier(4);

console.log(double(2));
console.log(triples(2));
console.log(quadruples(2));












    