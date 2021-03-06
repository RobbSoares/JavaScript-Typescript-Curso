/*
JavaScript é baseado em protótipos para passar propriedades e metódos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (___proto___) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro. */


function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.fullName = () => this.name + ' ' + this.surname;
}

const personOne = new Person('Rob', 'Soares');



