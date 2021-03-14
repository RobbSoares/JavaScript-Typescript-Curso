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
        const validPassword = this.checkPassword();

        if(validFields && validPassword) {
            alert('Formulário enviado.');
            this.form.submit();
        }
    }

    checkPassword() {
        let valid = true;

        const password = this.form.querySelector('.password');
        const repeatPassword = this.form.querySelector('.confirm-password');

        if(password.value !== repeatPassword.value) {
            valid = false;
            this.createError(password, 'Campos senha e repetir senha precisam ser iguais');
            this.createError(repeatPassword, 'Campos senha e repetir senha precisam ser iguais');
        }

        if(password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(repeatPassword, 'Senha precisa estar entre 6 e 12 caracteres');
        }

        return valid;
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
            if(field.classList.contains('cpf')) {
                if(!this.validateCPF(field)) {
                    valid = false;
                }
            }

            if(field.classList.contains('user')) {
                if(!this.validateUser(field)) {
                    valid = false;
                }
            }
        }

        return valid;
    }

    validateUser(field) {
        const user = field.value;
        let valid = true;

        if(user.length < 3 || user.length > 12){
            this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }
        
        if(!user.match(/[a-zA-Z0-9]+$/g)){
            this.createError(field, 'Nome de usuário precisa conter apenas letras e/ou números.');
            valid = false;
        }

        return true;
    }

    validateCPF(field) {
        const CPF = new ValidateCPF(field.value);
        if(!CPF.validate()) {
            this.createError(field, 'CPF Inválido');
        }

        return true;
    }

    createError(field, message) {
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    
    }
}

const validate = new ValidateForm();