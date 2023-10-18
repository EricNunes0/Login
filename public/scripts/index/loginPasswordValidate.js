function loginPasswordValidate() {
    const password = document.querySelector(`#login-password`);
    const passwordValue = password.value;
    if(!passwordValue) {
        inputErrorAlert(password);
        loginErrorAlert("Você precisa informar uma senha!");
        password.focus();
        return false;
    };
    if(!loginPasswordRules.lowerCase(passwordValue)) {
        inputErrorAlert(password);
        loginErrorAlert("Sua senha precisa ter 1 caractere minúsculo!");
        password.focus();
        return false;
    };
    if(!loginPasswordRules.upperCase(passwordValue)) {
        inputErrorAlert(password);
        loginErrorAlert("Sua senha precisa ter 1 caractere maiúsculo!");
        password.focus();
        return false;
    };
    if(!loginPasswordRules.number(passwordValue)) {
        inputErrorAlert(password);
        loginErrorAlert("Sua senha precisa ter 1 número!");
        password.focus();
        return false;
    };
    if(!loginPasswordRules.special(passwordValue)) {
        inputErrorAlert(password);
        loginErrorAlert("Sua senha precisa ter 1 caractere especial!");
        password.focus();
        return false;
    };
    if(!loginPasswordRules.length(passwordValue)) {
        inputErrorAlert(password);
        loginErrorAlert("Sua senha precisa ter no mínimo 8 caracteres!");
        password.focus();
        return false;
    };
    removeInputError(password);
    return true;
};

const loginPasswordRules = {
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