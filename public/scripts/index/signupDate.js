function signupDate() {
    const date = document.querySelector(`#date`);
    const value = date.value;
    if(!value) {
        inputErrorAlert(date);
        warningAlert("Você precisa informar a sua data de nascimento!");
        date.focus();
        return false;
    };
    let currentTime = new Date();
    let dateObj = new Date(value);
    if(isNaN(dateObj)) {
        inputErrorAlert(date);
        warningAlert("Insira uma data de nascimento válida!");
        date.focus();
        return false;
    };
    let currentYear = currentTime.getFullYear();
    let dateYear = dateObj.getFullYear();
    if(dateYear > currentYear || dateYear < 1910) {
        inputErrorAlert(date);
        warningAlert("Insira um ano válido!");
        date.focus();
        return false;
    };
    if(dateObj.getTime() > currentTime.getTime()) {
        inputErrorAlert(date);
        warningAlert("Insira uma data válida!");
        date.focus();
        return false;
    };
    removeInputError(date);
    return true;
};