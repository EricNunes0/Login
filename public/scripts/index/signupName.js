function signupName(pos) {
    const firstName = document.querySelector(`#firstName`);
    const lastName = document.querySelector(`#lastName`);
    let name;
    if(pos === `first`) {
        name = firstName;
    } else if(pos === `last`) {
        name = lastName;
    } else {
        warningAlert("Erro!");
        return false;
    };
    const value = name.value;
    if(!value) {
        inputErrorAlert(name);
        warningAlert("Você precisa informar o seu nome!");
        name.focus();
        return false;
    };
    if(value.length < 3) {
        inputErrorAlert(name);
        warningAlert("Seu nome precisa ter no mínimo 3 caracteres!");
        name.focus();
        return false;
    };
    if(value.length > 100) {
        inputErrorAlert(name);
        warningAlert("Seu nome precisa ter no máximo 100 caracteres!");
        name.focus();
        return false;
    };
    let padrao = /\d/;
    if(padrao.test(value)) {
        inputErrorAlert(name);
        warningAlert("Não são permitidos números no nome!");
        name.focus();
        return false;
    };
    if(firstName.value.toLowerCase() == lastName.value.toLowerCase()) {
        inputErrorAlert(name);
        warningAlert("Seu nome e sobrenome não podem ser iguais!");
        name.focus();
        return false;
    };
    removeInputError(name);
    return true;
};