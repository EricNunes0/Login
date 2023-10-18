const loginButton = document.querySelector("#login-submit");
const loginForm = document.querySelector("#login-form");

const loginFormInputs = [
    {
        "validation": () => loginEmailValidate()
    },
    {
        "validation": () => loginPasswordValidate()
    }
];

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    removeInputErrors();
    for(const input of loginFormInputs) {
        if(input.validation !== undefined) {
            if(input.validation() === false) {
                return;
            };
        }
    };
    if(loginForm) {
        loginForm.submit();
    };
});