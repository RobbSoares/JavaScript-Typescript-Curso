
class ValidateCPF {
    constructor(CPF) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: CPF.replace(/\D+/g, '')
        });
    }

    isSequency() {
        return this.cleanCPF.charAt(0).repeat(this.cleanCPF.length) === this.cleanCPF;
    }

    generateNewCPF() {
        const partialCPF = this.cleanCPF.slice(0, -2);
        const digitOne = ValidateCPF.generateDigit(partialCPF);
        const digitTwo = ValidateCPF.generateDigit(partialCPF + digitOne);
        this.newCPF = partialCPF + digitOne + digitTwo;
        
    }

    static generateDigit(partialCPF) {
        let total = 0;
        let reverse = partialCPF.length + 1;

        for(let numericString of partialCPF) {
            total += reverse * Number(numericString);
            reverse--;
        }
        
        const digit = 11 - (total % 11);
        return digit <= 9 ? digit : 0;
    }

    validate() {
        if(!this.cleanCPF) return false;
        if(typeof this.cleanCPF !== 'string') return false;
        if(this.cleanCPF.length !== 11) return false;
        if(this.isSequency()) return false;
        this.generateNewCPF();
    
        return this.newCPF === this.cleanCPF;
    }
}


let validateCPF = new ValidateCPF('070.987.720-03');
// let validateCPF = new ValidateCPF('555.555.555-55');

if(validateCPF.validate()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido')
}












