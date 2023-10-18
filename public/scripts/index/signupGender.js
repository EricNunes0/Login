function signupGenderAddAlert() {
    const radioDivs = document.querySelectorAll(`.sign-radio-divs`);
    radioDivs.forEach((gender) => {
        inputErrorAlert(gender);
    });
};

function signupGenderRemoveAlert() {
    const radioDivs = document.querySelectorAll(`.sign-radio-divs`);
    radioDivs.forEach((gender) => {
        removeInputError(gender);
    });
};

function signupGender() {
    let inputName = ["gender"];
    let radioCheck = document.querySelector(`input[name="${inputName}"]:checked`) ? true : false;
    if(!radioCheck) {
        signupGenderAddAlert();
        warningAlert("Você precisa informar o seu gênero!");
    } else {
        signupGenderRemoveAlert();
    };
    return radioCheck;
};