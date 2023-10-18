const signupButton = document.querySelector("#signup-submit");
const signupForm = document.querySelector("#signup-form");

const signupFormInputs = [
    {
        "validation": () => signupName(`first`)
    },
    {
        "validation": () => signupName(`last`)
    },
    {
        "validation": () => signupDate()
    },
    {
        "validation": () => signupGender()
    },
    {
        "validation": () => signupEmailValidate()
    },
    {
        "validation": () => signupPhone()
    },
    {
        "validation": () => signupPassword()
    }
];

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    for(const input of signupFormInputs) {
        if(input.validation !== undefined) {
            if(input.validation() === false) {
                return;
            };
        }
    };
    if(signupForm) {
        signupForm.submit();
    };
});