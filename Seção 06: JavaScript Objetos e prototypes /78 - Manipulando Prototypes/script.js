// new Object -> Object.prototype

function Product(name, price) {
    this.name = name;
    this.price = price;

}

Product.prototype.discount = function(percentual) {
    this.price = this.price - (this.price * (percentual / 100));
};

Product.prototype.increase = function(percentual) {
    this.price = this.price + (this.price * (percentual / 100));
};

const productOne = new Product('Camiseta', 50);
const productTwo = {
    name: 'Caneca',
    price: 15
};

Object.setPrototypeOf(productTwo, Product.prototype);

productTwo.increase(10);



const productThree = Object.create(Product.prototype, {
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    size: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    },
});


productThree.increase(10);




console.log(productOne);
console.log(productTwo);
console.log(productThree);

// productOne.discount(100);
// productOne.increase(100);











/* 
const objA = {
    keyA: 'A'

    // __proto__: Object.prototype
}

const objB = {
    keyB: 'B'
    
}

const objC = new Object();
objC.keyC = 'C'

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.keyB);
 */










