function loginErrorAlert(warning) {
    const warningSpan = document.querySelector("#login-warning");
    if(warningSpan) {
        warningSpan.textContent = warning;
    };
    return console.error(warning);
};