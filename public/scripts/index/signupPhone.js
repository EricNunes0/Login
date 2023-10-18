const phoneFormat = (value) => {
    return value.replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1)$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(-\d{4})\d+?$/, "$1")
};

const phone = document.querySelector("#phone");
const field = phone.dataset.js
phone.addEventListener("input", (e) => {
    e.target.value = phoneFormat(e.target.value);
}, false);

function signupPhone() {
    const phone = document.querySelector(`#phone`);
    const value = phone.value;
    if(!value) {
        inputErrorAlert(phone);
        warningAlert("Você precisa informar o seu telefone!");
        phone.focus();
        return false;
    };
    if(value.length > 14) {
        inputErrorAlert(phone);
        warningAlert("Seu nome precisa ter no máximo 14 caracteres!");
        phone.focus();
        return false;
    };
    removeInputError(phone);
    return true;
};