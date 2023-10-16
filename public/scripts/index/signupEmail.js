function signupEmail() {
    const email = document.querySelector(`#signup-email`);;
    const value = email.value;
    if(!value) {
        inputErrorAlert(email);
        warningAlert("Você precisa informar o seu e-mail!");
        email.focus();
        return false;
    };
    if(value.length < 6) {
        inputErrorAlert(email);
        warningAlert("Seu e-mail precisa ter no mínimo 6 caracteres!");
        email.focus();
        return false;
    };
    if(value.length > 256) {
        inputErrorAlert(email);
        warningAlert("Seu e-mail precisa ter no máximo 256 caracteres!");
        email.focus();
        return false;
    };
    removeInputError(email);
    return true;
};