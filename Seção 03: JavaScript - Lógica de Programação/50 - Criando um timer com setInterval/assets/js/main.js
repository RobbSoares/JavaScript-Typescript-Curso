function clock() {

    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false, 
            timeZone: 'GMT'
        });
    }
    
    const clock = document.querySelector('.clock');
    const btnStart = document.querySelector('.start');
    const btnStop = document.querySelector('.pause');
    const btnReset = document.querySelector('.reset');
    let seconds = 0;
    let timer;
    
    function startClock() {
        timer = setInterval(function() {
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }
    
    
    document.addEventListener('click', (e) => {
        const element = e.target;
        
        
        if(element.classList.contains('start')) {
            clock.classList.remove('paused');
            clearInterval(timer);
            startClock();
        }
        
        if(element.classList.contains('pause')) {
            clock.classList.add('paused');
            clearInterval(timer);
        }
        
        if(element.classList.contains('reset')) {
            clock.classList.remove('paused');
            clearInterval(timer);
            clock.innerHTML = `00:00:00`;
            seconds = 0;
        }
    });
}

clock();

/* btnStart.addEventListener('click', (e) => {
    clock.classList.remove('paused');
    clearInterval(timer);
    startClock();
});

btnStop.addEventListener('click', (e) => {
    clock.classList.add('paused');
    clearInterval(timer);
}); */

/* btnReset.addEventListener('click', (e) => {
    clearInterval(timer);
    clock.innerHTML = `00:00:00`;
    seconds = 0;
});
 */

