
//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// names.splice(indice, delete, elemento1, elemento2, elemento3);

// push() -> names.splice(names.length, 0, 'Luiz', 'Otávio')

// shift() ->
names.splice(2, 0, 'Luiz', 'Otavio');
console.log(names);

// pop() -> const removed = names.splice(-1, 1);  

// shift() -> const removed = names.splice(0, 1)


// console.log(Number.MAX_VALUE);