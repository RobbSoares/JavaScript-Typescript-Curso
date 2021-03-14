function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function wait(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof message !== 'string') {
                reject('Caí no erro');
                return;
            }
            
            resolve((message + ' - passei na promise').toUpperCase());
        }, time);
    });
}


// Promise.all Promise.race Promise.resolve Promise.reject

/* const promises = [

    wait('Promise 1', rand(1, 5)),
    wait('Promise 2', rand(1, 5)),
    wait('Promise 3', rand(1, 5)),
    wait(1000, rand(1, 5)),
    // wait(1000, 1000),

]; */


function downloadPage() {
    const inCache = true;
    if(inCache) {
        return Promise.resolve('Página em cache');
    } else {
        return wait('Baixei a página', 3000);
    }
}

downloadPage()
    .then(pageData => {console.log(pageData)})
    .catch(err => {console.log('Erro', err)});




// Promise.race(promises)
//     .then(value => {
//         console.log(value);
//     })
//     .catch(err => {
//         console.log(err);
//     });



/* Promise.all(promises)
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.log(err);
    });
 */







