/*
    * && -> false && true -> false "o valor mesmo"
    * || -> true || false -> true "retorna o valor verdadeiro"

    * Falsy - Valores falsos:
    * false
    * 0
    * '' "" ``
    * null / undefined
    * NaN
*/


const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);





// const userColor = null;
// const defaultColor = userColor || 'purple';

// console.log(defaultColor);



// function speakHi () {
//     return 'Oi';
// }

// let willExecute = 'João';

// console.log(willExecute && speakHi());