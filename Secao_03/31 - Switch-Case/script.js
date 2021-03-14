function getWeekDayText(weeDay) {
    let weekDayText;

    switch (weekDay) {
        case 0:
            weekDayText = 'Domingo'
            return weekDayText;
        case 1:
            weekDayText = 'Segunda'
            return weekDayText;
        case 2:
            weekDayText = 'Terça-feira'
            return weekDayText;
        case 3:
            weekDayText = 'Quarta-feira'
            return weekDayText;
        case 4:
            weekDayText = 'Quinta-feira'
            return weekDayText;
        case 5:
            weekDayText = 'Sexta-feira'
            return weekDayText;
        case 6:
            weekDayText = 'Sábado'
            return weekDayText;
        default:
            weekDayText = '';
            return weekDayText;
    }
}


const date = new Date('2001-03-12 06:00:00');
const weekDay = date.getDay();
const weekDayText = getWeekDayText();

console.log(weekDay, weekDayText);