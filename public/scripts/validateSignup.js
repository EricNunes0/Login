const signupButton = document.querySelector("#signup-submit");
const signupForm = document.querySelector("#signup-form");

const formInputs = [
    {
        "query": "#first-name",
        "warning": "Você precisa informar o seu primeiro nome!"
    },
    {
        "query": "#last-name",
        "warning": "Você precisa informar o seu último nome!"
    },
    {
        "query": "#date",
        "warning": "Você precisa informar a sua data de nascimento!"
    },
    {
        "warning": "Você precisa informar o seu gênero!",
        "validation": () => radioValidate(["gender"])
    },
    {
        "query": "#email",
        "warning": "Você precisa informar o seu e-mail!"
    },
    {
        "query": "#phone",
        "warning": "Você precisa informar o seu número de telefone!"
    },
    {
        "query": "#password",
        "warning": "Você precisa criar uma senha!"
    },
    {
        "query": "#password-validate",
        "warning": "Você precisa verificar sua senha!"
    },
    {
        "warning": "As senhas não coincidem!",
        "validation": () => passwordValidate()
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
        } else {
            if(input.validation !== undefined) {
                if(input.validation() === false) {
                    warningAlert(input.warning);
                    return;
                };
            };
        };
    };
    if(signupForm) {
        signupForm.submit();
    };
});