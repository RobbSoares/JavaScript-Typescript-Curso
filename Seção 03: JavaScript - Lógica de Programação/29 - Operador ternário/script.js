// (condição) ? 'Valor pra verdadeiro' : 'Valor para falso';


const userPoints = 1000;

const userLevel = userPoints >= 1000 ? 'Usuário VIP' : 'Usuário normal';


const userColor = 'Pink';
const defaultColor = userColor || 'Black';

console.log(userLevel, defaultColor);