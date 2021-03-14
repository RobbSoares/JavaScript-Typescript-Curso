function myScope() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    const people = [''];

    function receiveForm(event) {
        event.preventDefault();

        const name = form.querySelector('.name');
        const surname = form.querySelector('.surname');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        people.push({
            name: name.value,
            surname: surname.value,
            weight: weight.value,
            height: height.value
        })

        result.innerHTML += `${name.value} ${surname.value} ${weight.value} ${height.value} <br>`
    }

    form.addEventListener('submit', receiveForm)
}

myScope();














// form.onsubmit = function(event) {
//     event.preventDefault();
//     console.log('Foi enviado');
// };