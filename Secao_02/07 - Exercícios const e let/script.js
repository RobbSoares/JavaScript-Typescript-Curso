const personName = 'Rob';
const age = 19;
const weight = 52;
const heightInMeters = 1.68;

let bodyMassIndex = weight / (heightInMeters * heightInMeters); // peso / (altura * altura)

let birthYear = 2020 - age;






console.log(`${personName} tem ${age} anos, pesa ${weight}kg, tem ${heightInMeters} de altura e seu IMC é de ${bodyMassIndex} \n${personName} nasceu em ${birthYear}`);

