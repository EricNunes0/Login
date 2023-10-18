function passwordReveal(id) {
    const password = document.querySelector(`#${id}`);
    password.type == "password" ? passwordShow(password) : passwordHide(password);
};