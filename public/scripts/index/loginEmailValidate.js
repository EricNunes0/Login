function loginEmailValidate() {
    const email = document.querySelector(`#login-email`);;
    const value = email.value;
    if(!value) {
        inputErrorAlert(email);
        loginErrorAlert("Você precisa informar o seu e-mail!");
        email.focus();
        return false;
    };
    if(value.length < 6) {
        inputErrorAlert(email);
        loginErrorAlert("Seu e-mail precisa ter no mínimo 6 caracteres!");
        email.focus();
        return false;
    };
    if(value.length > 256) {
        inputErrorAlert(email);
        loginErrorAlert("Seu e-mail precisa ter no máximo 256 caracteres!");
        email.focus();
        return false;
    };
    if(!value.includes("@")) {
        inputErrorAlert(email);
        loginErrorAlert("Seu e-mail precisa ter um \"@\"");
        email.focus();
        return false;
    };
    if(getLetterCount(value, "@") > 1) {
        inputErrorAlert(email);
        loginErrorAlert("Seu e-mail não pode ter mais de um \"@\"");
        email.focus();
        return false;
    };
    const emailSplit = value.split("@");
    const emailUsername = emailSplit[0];
    const emailServer = emailSplit[1];
    if(!emailUsername || !emailServer) {
        inputErrorAlert(email);
        loginErrorAlert("Parece que você esqueceu de algo.");
        email.focus();
        return false;
    };
    let emailRegex = /^[a-z0-9.]+$/i;
    if(!emailRegex.test(emailUsername)) {
        inputErrorAlert(email);
        loginErrorAlert("Somente letras (a - z), números (0 - 9) e pontos (.) são permitidos antes do \"@\"!");
        email.focus();
        return false;
    };
    if(!emailRegex.test(emailServer)) {
        inputErrorAlert(email);
        loginErrorAlert("Somente letras (a - z), números (0 - 9) e pontos (.) são permitidos depois do \"@\"!");
        email.focus();
        return false;
    };
    removeInputError(email);
    return true;
};

function getLetterCount(word, letter) {
    let counter = 0;
    if(word && letter) {
        word.split("").forEach((w) => {
            if(w == letter) {
                counter++;
            };
        });
    };
    return counter;
};