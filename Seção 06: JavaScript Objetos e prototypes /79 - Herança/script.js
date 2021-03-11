// Produto -> aumento, desconto
// Camiseta = cor, caneca  = material

function Product(name, price) {
    this.name = name;
    this.price = price;
} 

Product.prototype.increase = function(amount) {
    this.price += amount;
};

Product.prototype.discount = function(amount) {
    this.price -= amount;
};

function Camiseta(name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}

Camiseta.prototype = Object.create(Product.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.increase = function(percentual) {
    this.price = this.price + (this.price * percentual / 100);
}

function Mug(name, price, material, stock) {
    Product.call(this, name, price);
    this.material = material;
    
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,

        get: function() {
            return stock
        },

        set: function(value) {
            if(typeof value !== 'number') return;
            stock = value;
        }
    });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;



const product = new Product('gen', 11);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const mug = new Mug('Caneca', 13, 'Plástico', 5);
mug.stock = 100;

console.log(mug);
console.log(mug.stock);
console.log(product);
console.log(camiseta);















