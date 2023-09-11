const signupButton = document.querySelector("#signup-submit");
const signupForm = document.querySelector("#signup-form");

const formInputs = [
    {
        "query": "#email",
        "warning": "Você precisa informar o seu e-mail!"
    },
    {
        "query": "#password",
        "warning": "Você precisa informar a sua senha!"
    }
];

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    for(const input of formInputs) {
        if(input.query) {
            const inputQuery = document.querySelector(input.query);
            const value = inputQuery.value;
            if(!value) {
                warningAlert(input.warning);
                return;
            };
        };
    };
    if(signupForm) {
        signupForm.submit();
    };
});