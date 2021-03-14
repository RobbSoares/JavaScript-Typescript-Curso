// Object.values
// Object.entries
// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(objeto, 'propridedade')
// ... (spread)

// Já vimos
// Object.keys(retorna as chaves)
// Object.freeze(congela o objeto)
// Object.defineProperty(define uma propriedade)
// Object.defineProperties(define várias propriedades)

// const product = {name: 'Produto', price: 1.8};
// Object.defineProperty(product, 'name', {
//     writable: false,
//     configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(product, 'name'));

const product = {name: 'Produto', price: 1.8};
// console.log(Object.entries(product));
// console.log(Object.values(product));

for(let value of Object.entries(product)) {
    console.log(value[0], value[1]);
}


for(let entry of Object.entries(product)) {
    console.log(entry);
}


// const mug = {name: product.name}


// const mug = {...product};

// const mug = Object.assign({}, product, {material: 'porcelain'});

// mug.price = 2.5
// // product.name = 'Rob Soares';
// mug.name = 'Rob Soares';
// console.log(product);
// console.log(mug);


