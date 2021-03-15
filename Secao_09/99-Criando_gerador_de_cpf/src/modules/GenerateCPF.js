import ValidateCPF from './ValidateCPF';

export default class GenerateCPF {

    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formated(CPF) {
        return (
            CPF.slice(0, 3) + '.' +
            CPF.slice(3, 6) + '.' +
            CPF.slice(6, 9) + '-' +
            CPF.slice(9, 11) 
        );
    }

    generateNewCPF() {
        const CPFWithoutDigit = this.rand();

        const digitOne = ValidateCPF.generateDigit(CPFWithoutDigit);
        const digitTwo = ValidateCPF.generateDigit(CPFWithoutDigit + digitOne);
        const newCPF = CPFWithoutDigit + digitOne + digitTwo;
        return this.formated(newCPF);
    }
}