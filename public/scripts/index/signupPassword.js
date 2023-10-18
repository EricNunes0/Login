function signupPassword() {
    const password = document.querySelector(`#signup-password`);
    const passwordValidate = document.querySelector(`#password-validate`);
    const passwordValue = password.value;
    const passwordValidateValue = passwordValidate.value;
    if(!passwordValue) {
        inputErrorAlert(password);
        warningAlert("Você precisa informar uma senha!");
        password.focus();
        return false;
    };
    if(!passwordRules.lowerCase(passwordValue)) {
        inputErrorAlert(password);
        warningAlert("Sua senha precisa ter 1 caractere minúsculo!");
        password.focus();
        return false;
    };
    if(!passwordRules.upperCase(passwordValue)) {
        inputErrorAlert(password);
        warningAlert("Sua senha precisa ter 1 caractere maiúsculo!");
        password.focus();
        return false;
    };
    if(!passwordRules.number(passwordValue)) {
        inputErrorAlert(password);
        warningAlert("Sua senha precisa ter 1 número!");
        password.focus();
        return false;
    };
    if(!passwordRules.special(passwordValue)) {
        inputErrorAlert(password);
        warningAlert("Sua senha precisa ter 1 caractere especial!");
        password.focus();
        return false;
    };
    if(!passwordRules.length(passwordValue)) {
        inputErrorAlert(password);
        warningAlert("Sua senha precisa ter no mínimo 8 caracteres!");
        password.focus();
        return false;
    };
    removeInputError(password);
    if(!passwordValidateValue) {
        inputErrorAlert(passwordValidate);
        warningAlert("Você precisa confirmar a sua senha!");
        passwordValidate.focus();
        return false;
    };
    if(passwordValue !== passwordValidateValue) {
        inputErrorAlert(passwordValidate);
        warningAlert("As senhas digitadas não coincidem!");
        passwordValidate.focus();
        return false;
    };
    removeInputError(passwordValidate);
    return true;
};

const passwordRules = {
    lowerCase(value) {
        for(const v of value.split("")) {
            const regex = /^[A-Za-z]+$/;
            if(regex.test(v) && v === v.toLowerCase()) {
                return true;
            };
        };
        return false;
    },
    upperCase(value) {
        for(const v of value.split("")) {
            const regex = /^[A-Za-z]+$/;
            if(regex.test(v) && v === v.toUpperCase()) {
                return true;
            };
        };
        return false;
    },
    number(value) {
        for(const v of value.split("")) {
            const regex = /^[0-9]+$/;
            if(regex.test(v)) {
                return true;
            };
        };
        return false;
    },
    special(value) {
        for(const v of value.split("")) {
            const regex = /^[A-Za-z0-9]+$/;
            if(!regex.test(v)) {
                return true;
            };
        };
        return false;
    },
    length(value) {
        if(value.length < 8) {
            return false;
        };
        return true;
    }
};