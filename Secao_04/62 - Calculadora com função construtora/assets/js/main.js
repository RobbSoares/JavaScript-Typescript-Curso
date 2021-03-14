function Calculator() {
    this.display = document.querySelector('.display');
    
    this.start = () => {
        this.captureClick();
        this.captureEnter();
    };

    this.captureEnter = () => {
       document.addEventListener('keypress', e => {
            if(e.key !== 'Enter') return;
            this.makeAccount(); 
            
        } );
    }

    this.captureClick = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if(el.classList.contains('btn-num')) this.addNumberToDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.makeAccount();
        });
    }

    this.addNumberToDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    
    this.makeAccount = () => {
        try {
            const account = eval(this.display.value);

            if(!account) {
                alert('Conta inválida');
                return;
            }

            this.display.value = account;
        } catch(err) {
            alert('Conta inválida');
            return;
        }
    }
}

const calculator = new Calculator();
calculator.start();














