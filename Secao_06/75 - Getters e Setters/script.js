// defineProperty - defineProperties

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    let privateStock = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true,    
        configurable: true,  
        get: function() {
            return privateStock;
        },

        set: function(value) {
            if(typeof value !== 'number') {
                throw new TypeError('Mensagem');
            }
            
            privateStock = value;
        }
    });
}

function createProduct(name) {
    return {
        get name() {
            return name;
        },

        set name(value) {
            name = value;
        }
    };
}

// const productOne = new Product('Camiseta', 20, 3);
// console.log(productOne);
// productOne.stock = 'f'
// console.log(productOne.stock)

const productTwo = createProduct('camiseta');
console.log(productTwo.name);


















