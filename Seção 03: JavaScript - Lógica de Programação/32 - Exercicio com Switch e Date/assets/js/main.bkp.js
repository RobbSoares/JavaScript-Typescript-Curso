const text = document.querySelector('.text');
const currentDay = new Date();
const currentWeekDay = currentDay.getDay();
const currentMonthDay = currentDay.getMonth();


function getWeekDay(currentWeekDay) {
    switch(currentWeekDay) {
        case 0:
            return 'Domingo';
        
        case 1:
            return 'Segunda-feira';
        
        case 2:
            return 'Terça-feira';
        
        case 3:
            return 'Quarta-feira';
        
        case 4:
            return 'Quinta-feira';

        case 5:
            return 'Sexta-feira';

        case 6:
            return 'Sábado';
    }
}

function getMonth(currentMonth) {
    switch(currentMonth) {
        case 0: 
            return 'Janeiro';
        case 1: 
            return 'Fevereiro';
        case 2: 
            return 'Março';
        case 3: 
            return 'Abril';
        case 4: 
            return 'Maio';
        case 5: 
            return 'Junho';
        case 6: 
            return 'Julho';
        case 7: 
            return 'Agosto';
        case 8: 
            return 'Setembro';
        case 9: 
            return 'Outubro';
        case 10: 
            return 'Novembro';
        case 11: 
            return 'Dezembro';
    }
}

let month = getMonth(currentMonthDay);
let week = getWeekDay(currentWeekDay);
let hour = currentDay.getHours();
let minutes = currentDay.getMinutes();
let day = currentDay.getDate();
let year = currentDay.getFullYear();

minutes = minutes < 10 ? '0' + minutes : minutes;

text.innerHTML = `${week}, ${day} de ${month} de ${year} ${hour}:${minutes}`;
