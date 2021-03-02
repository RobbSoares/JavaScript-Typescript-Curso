function showHour() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function intervalFunction() {
    console.log(showHour());
}

const timer = setInterval(() => {
    console.log(showHour());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 3000);

setTimeout(() => {
    console.log('Olá, mundo!');
}, 5000);




