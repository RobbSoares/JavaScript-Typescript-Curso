class ValidateForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.checkFields();
    }
    
    checkFields() {
        let valid = true;
        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }
        
        for(let field of this.form.querySelectorAll('.validate')) {
            if(!field.value) {
                let label = field.previousElementSibling.innerText;
                this.createError(field, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }
        }
    }

    createError(field, message) {
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    
    }
}

const validate = new ValidateForm();