// defineProperty - defineProperties

function Product(name, price, stock) {
    Object.defineProperty(this, 'stock', {
        enumerable: true,    // mostra a chave
        value: stock,        // valor
        writable: false,     // pode alterar
        configurable: true   // configurável
    });
    
    Object.defineProperties(this, {
        nome: {
            enumerable: true,    
            value: name,        
            writable: true,     
            configurable: true  
        },
        preco: {
            enumerable: true,    
            value: price,        
            writable: true,    
            configurable: true   
        }
    });
    
    
    
}

const productOne = new Product('Camiseta', 20, 3);
console.log(productOne);




















