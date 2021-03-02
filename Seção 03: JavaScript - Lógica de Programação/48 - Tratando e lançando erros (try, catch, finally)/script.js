/* try {
    // É executada quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (err) {
    // É executada quandp há erros
    console.log('Tratando o erro');
} finally {
    // Sempre
    console.log('Finally: Eu sempre sou executado');
} */

function returnHour(date) {
    if(date && !(date instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if(!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const date = new Date('01-01-1970 12:58:12');
    const hour = returnHour();
    
    console.log(hour);
} catch(e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia');
}