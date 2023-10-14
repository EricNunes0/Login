function hideFormLogin() {
    const loginDiv = document.querySelector("#login-div");
    loginDiv.classList.remove("opened");
    loginDiv.classList.add("closing");
    setTimeout(function() {
        loginDiv.classList.remove("closing");
        loginDiv.classList.add("closed");
    }, 0.3 * 1000);
};