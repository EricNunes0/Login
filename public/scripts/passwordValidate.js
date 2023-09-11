function passwordValidate() {
    const password = document.querySelector("#password").value;
    const passwordVal = document.querySelector("#password-validate").value;

    return password === passwordVal;
};