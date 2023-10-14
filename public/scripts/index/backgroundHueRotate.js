function backgroundHueRotate(hue) {
    const backgroundDiv = document.querySelector("#home-background-div");
    const titleIcon = document.querySelector("#home-title-icon");
    const loginButton = document.querySelector("#home-login-button");
    const openFormButtons = document.querySelectorAll(".open-form-buttons");
    const genderInputs = document.querySelectorAll(".sign-gender-inputs");
    const submitButtons = document.querySelectorAll(".sign-submits");
    const returnButton = document.querySelector("#return-button");
    backgroundDiv.style.filter = `hue-rotate(${hue}deg)`;
    titleIcon.style.filter = `hue-rotate(${hue}deg)`;
    loginButton.style.filter = `hue-rotate(${hue}deg)`;
    genderInputs.forEach((radio) => {
        radio.style.filter = `hue-rotate(${hue}deg)`;
    });
    submitButtons.forEach((button) => {
        button.style.filter = `hue-rotate(${hue}deg)`;
    });
    openFormButtons.forEach((button) => {
        button.style.filter = `hue-rotate(${hue}deg)`;
    });
    returnButton.style.filter = `hue-rotate(${hue}deg)`;
};