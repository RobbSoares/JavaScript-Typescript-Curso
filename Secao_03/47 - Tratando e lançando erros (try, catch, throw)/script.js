
function sum(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');
    }

    return x + y;
}
try {
    console.log(sum(1, 2));
    console.log(sum(1, '2'));
} catch(err) {
    console.log(err);
}


