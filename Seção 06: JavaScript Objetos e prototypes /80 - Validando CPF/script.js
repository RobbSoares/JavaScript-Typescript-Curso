// 705.484.450-52                   070.987.720-03
/*
    7x      0x     5x     4x     8x     4x     4x     5x     0x                 // Números do CPF
    10      9      8      7      6      5      4      3      2                  // Multiplica pelos números do CPF
    70      0      40     28     48     20     16     15     0  = 234           // Total
      
    11 - (237 % 11) = 5 (Primeiro digito)    // Se o dígito for maior que 9, consideramos 0

    7x      0x     5x     4x     8x     4x     4x     5x     0x     5x
    11      10     9      8      7      6      5      4      3      2       
    77      0      45     32     56     24     20     20     0      101 = 284

    11 - (284 % 11) = 2 (Primeiro digito)

    705.484.450-52 === 705.484.450-52 
*/


function ValidateCPF (CPF) {
    Object.defineProperty(this, 'cleanCPF', {
        get: function() {
            return CPF.replace(/\D+/g, '');
        }
    });
}


ValidateCPF.prototype.validate = function() {
    if(typeof this.cleanCPF === 'undefined') return false;
    if(this.cleanCPF.length !== 11) return false;

    if(this.isSequency()) return false; 

    const CPFPartial = this.cleanCPF.slice(0, -2);
    const digitOne = this.createDigit(CPFPartial);
    const digitTwo = this.createDigit(CPFPartial + digitOne);

    const newCPF = CPFPartial + digitOne + digitTwo;

    return newCPF === this.cleanCPF;
};

ValidateCPF.prototype.createDigit = function(CPFPartial) {
    const CPFArray = Array.from(CPFPartial);
    let regressive = CPFArray.length + 1;
    const total = CPFArray.reduce((ac, val) => {
        ac += (regressive * Number(val));
        regressive--;
        return ac;
        
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
};

ValidateCPF.prototype.isSequency = function() {
    return this.cleanCPF[0].repeat(this.cleanCPF.length) === this.cleanCPF;
}

const CPF = new ValidateCPF('070.987.720-03');

if(CPF.validate()) {
    console.log('CPF Inválido');
} else {
    console.log('CPF Inválido');
}