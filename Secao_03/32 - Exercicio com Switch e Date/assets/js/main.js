/* 
const h1 = document.querySelector('.container h1');

const date = new Date();

h1.innerHTML = date;

function getWeekDay(currentWeekDay) {
    const weekDay = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    return weekDay[currentWeekDay];
}

function getMonth(currentMonth) {
   const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
   return months[currentMonth];
}

function leftZero(number) {
    return number < 10 ? `0:${number}` : number;
}

function createDate(date) {
    const weekDay = date.getDay();
    const monthNumber = date.getMonth();
    
    const dayName = getWeekDay(weekDay);
    const monthName = getMonth(monthNumber);

    return (`${dayName}, ${date.getDate()} de ${monthName} de ${date.getFullYear()} ${leftZero(date.getHours())}:${leftZero(date.getMinutes())}`);
}


h1.innerHTML = createDate(date);
 */



const h1 = document.querySelector('.container h1');
const date = new Date();
h1.innerHTML = date.toLocaleDateString('pt-BR', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'});

