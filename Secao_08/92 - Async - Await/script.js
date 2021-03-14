function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof message !== 'string') {
                reject('ERRO!');
                return;
            }

            resolve(message);
            return;
        }, time)
    });
}




async function exec() {
    try {
        const phaseOne = await wait('Fase 1', rand());
        console.log(phaseOne);
    
        const phaseTwo = await wait('Fase 2', rand());
        console.log(phaseTwo);
    
        const phaseThree = await wait(3, rand());
        console.log(phaseThree);
    
        console.log('Terminamos na fase: ', phaseThree);
    } catch(e) {
        console.log(e);
    }

}

exec();







    // wait('Fase 1', rand())
    // .then(value => {
    //     console.log(value);
    //     return wait('Fase 2', rand());
    // })
    // .then(value => {
    //     console.log(value);
    //     return wait('Fase 3', rand());
    // })
    // .then(value => {
    //     console.log(value);
    //     return value;
    // })
    // .then(value => {
    //     console.log('Terminamos na fase: ', value);
    // })

    // .catch(err => {
    //     console.log(err);
    // })


















