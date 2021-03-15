import GenerateCPF from './modules/GenerateCPF';

import './assets/css/style.css'

(function() {
    const generate = new GenerateCPF();
    const generatedCPF = document.querySelector('.result');
    generatedCPF.innerHTML = generate.generateNewCPF();
})();










