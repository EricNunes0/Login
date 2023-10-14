function showFormLogin() {
    const loginDiv = document.querySelector("#login-div");
    loginDiv.classList.remove("closed");
    loginDiv.classList.add("opening");
    setTimeout(function() {
        loginDiv.classList.remove("opening");
        loginDiv.classList.add("opened");
    }, 0.3 * 1000);
};