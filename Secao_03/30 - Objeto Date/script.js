// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

// const threehours = 60 * 60 * 3 * 1000;
// const oneDay = 60 * 60 * 24 * 1000;
// const data = new Date(0 + threehours + oneDay);

// const date = new Date(); // ano, mes, dia, hora, minuto, segundo, milesimo de segundo
// console.log(date.toString());

// const date = new Date(1614371384018);
// console.log('Dia', date.getDate());
// console.log('Mês', date.getMonth() + 1); // mês começa do zero
// console.log('Ano', date.getFullYear());
// console.log('Hora', date.getHours());
// console.log('Min', date.getMinutes());
// console.log('Seg', date.getSeconds());
// console.log('ms', date.getMilliseconds());
// console.log('Dia da semana', date.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(date.toString());

// console.log(Date.now());


function leftZero(number) {
    return number >= 10 ? number : `0${number}`;
}

function dateFormat(date) {
    const day = leftZero(date.getDate());
    const month = leftZero(date.getMonth() + 1);
    const year = leftZero(date.getFullYear());
    const hour = leftZero(date.getHours());
    const minutes = leftZero(date.getMinutes());
    const seconds = leftZero(date.getSeconds());



    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}

const date = new Date();
const dateBrazil = dateFormat(date);


console.log(dateBrazil)


















