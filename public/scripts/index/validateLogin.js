const loginButton = document.querySelector("#login-submit");
const loginForm = document.querySelector("#login-form");

const loginFormInputs = [
    {
        "query": "#login-email",
        "warning": "Você precisa informar o seu e-mail!"
    },
    {
        "query": "#login-password",
        "warning": "Você precisa informar a sua senha!"
    }
];

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    removeInputErrors();
    for(const input of loginFormInputs) {
        if(input.query) {
            const inputQuery = document.querySelector(input.query);
            const value = inputQuery.value;
            if(!value) {
                inputErrorAlert(inputQuery);
                loginErrorAlert(input.warning);
                return;
            };
            removeInputError(inputQuery);
        };
    };
    if(loginForm) {
        loginForm.submit();
    };
});