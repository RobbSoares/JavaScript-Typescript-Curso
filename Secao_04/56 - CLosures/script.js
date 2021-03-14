function returnFunction(name) {
    return function() {
        return name;
    }
}

const funcao = returnFunction('Rob');
const funcao2 = returnFunction('Luiz');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2())