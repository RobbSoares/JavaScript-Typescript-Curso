const name = 'Rob';

function sayName() {
    console.log(name);
}

function useSayName() {
    const name = 'Robson'
    sayName();
}

useSayName();