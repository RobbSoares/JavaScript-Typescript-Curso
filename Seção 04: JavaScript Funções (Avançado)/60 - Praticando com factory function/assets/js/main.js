/* function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.btnClick();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                console.log(e);
                if(e.keyCode === 13) {
                    this.makeCount();
                }
            });
        },

        makeCount() {
            let count = this.display.value;

            try {
                count = eval(count);

                if(!count) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(count);
            } catch(e) {
                alert('Conta inválida');
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        btnClick() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.makeCount();
                }

            });  
        },

        btnForDisplay(value) {
            this.display.value += value;

        },

    };
}

const calculator = createCalculator();
calculator.start(); */


function Calculator() {

    this.display = document.querySelector('.display');

    this.start = function() {
        this.btnClick();
        this.pressEnter();
    }

    this.pressEnter = function() {
        this.display.addEventListener('keyup', e => {
            console.log(e);
            if (e.keyCode === 13) {
                this.makeCount();
            }
        });
    }

    this.makeCount = function() {
        let count = this.display.value;

        try {
            count = eval(count);

            if (!count) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(count);
        } catch (e) {
            alert('Conta inválida');
        }
    }

    this.clearDisplay = function() {
        this.display.value = '';
    }

    this.deleteOne = function() {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.btnClick = function() {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnForDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.deleteOne();
            }

            if (el.classList.contains('btn-eq')) {
                this.makeCount();
            }

        });
    }

    this.btnForDisplay = function(value) {
        this.display.value += value;
    }
}

const calculator = new Calculator();
calculator.start();
