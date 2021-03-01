
// String, number, undefined, null e boolean

const personName = 'Rob'; // string
const secondPersonName = "João"; // string
const thirdPersonName = `Carlos`; // string
const number = 10; // number
const secondNumber = 10.52; // number

let studentName; // undefined  = não aponta para local nenhum na memória
const studentLastName = null; // Nulo -> nõa aponta para local nenhum na memória
const approved = true; // Boolean -> true ou false

// console.log(typeof personName, personName);
// console.log(typeof number, number);
// console.log(typeof studentName, studentName);
// console.log(typeof studentLastName, studentLastName);
// console.log(typeof approved, approved);

let a = 2;
const b = a;

console.log(a, b);

a = 4;

console.log(a, b);