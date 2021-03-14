function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

wait('Conexão com a base de dados', randomNumber(1, 3))
    .then(answer => {
        console.log(answer);
        return wait('Buscando dados da base', randomNumber(1, 3));
    })
    .then(answer => {
        console.log(answer);
        return wait(22222, randomNumber(1, 3));
    })
    .then(answer => {
        console.log(answer);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('ERRO', e);
    });

console.log('Isso será exibido antes de qualquer promisse');









// Sem reject
/* function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

wait('Conexão com a base de dados', randomNumber(1, 3))
    .then(answer => {
        console.log(answer);
        return wait('Buscando dados da base', randomNumber(1, 3));
    })
    .then(answer => {
        console.log(answer);
        return wait('Tratando os dados da base', randomNumber(1, 3));
    })
    .then(answer => {
        console.log(answer);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    
    .catch();

console.log('Isso será exibido antes de qualquer promisse'); */

/*  Callback
function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time, cb){
    setTimeout(() => {
        console.log(msg);
        if(cb()) cb();
    }, time);
}

wait('Frase um', randomNumber(1, 3), function() {
    wait('Frase dois', randomNumber(1, 3), function() {
        wait('Frase tres', randomNumber(1, 3));
    });
});
 */

