function callLoginForm() {
    const signupDiv = document.querySelector("#signup-div");
    if(!signupDiv.className.includes("closed")) {
        hideFormSignup();
        setTimeout(function () {
            showFormLogin();
        }, 0.3 * 1000);
    };
};