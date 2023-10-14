function passwordValidate() {
    const password = document.querySelector("#signup-password").value;
    const passwordVal = document.querySelector("#password-validate").value;

    return password === passwordVal;
};