const signupButton = document.querySelector("#signup-submit");
const signupForm = document.querySelector("#signup-form");

const signupFormInputs = [
    {
        "query": "#firstName",
        "validation": () => signupName(`first`)
    },
    {
        "query": "#lastName",
        "validation": () => signupName(`last`)
    },
    {
        "query": "#date",
        "validation": () => signupDate()
    },
    {
        "warning": "Você precisa informar o seu gênero!",
        "validation": () => signupGender()
    },
    {
        "query": "#signup-email",
        "validation": () => signupEmail()
    },
    {
        "query": "#phone",
        "warning": "Você precisa informar o seu número de telefone!"
    },
    {
        "query": "#signup-password",
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
    for(const input of signupFormInputs) {
        if(input.query && input.validation !== undefined) {
            if(input.validation() === false) {
                return;
            };
        } else if(input.query) {
            const inputQuery = document.querySelector(input.query);
            const value = inputQuery.value;
            if(!value) {
                inputErrorAlert(inputQuery);
                warningAlert(input.warning);
                return;
            };
            removeInputError(inputQuery);
        } else if(input.validation !== undefined) {
            if(input.validation() === false) {
                if(input.warning) {
                    warningAlert(input.warning);
                };
                return;
            };
        };
    };
    if(signupForm) {
        signupForm.submit();
    };
});