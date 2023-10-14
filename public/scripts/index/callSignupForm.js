function callSignupForm() {
    const loginDiv = document.querySelector("#login-div");
    if(!loginDiv.className.includes("closed")) {
        hideFormLogin();
        setTimeout(function() {
            showFormSignup();
        }, 0.3 * 1000);
    };
};