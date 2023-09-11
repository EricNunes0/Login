function warningAlert(warning) {
    const warningSpan = document.querySelector("#signup-warning");
    if(warningSpan) {
        warningSpan.textContent = warning;
    };
    return console.error(warning);
};