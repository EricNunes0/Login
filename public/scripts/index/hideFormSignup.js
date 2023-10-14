function hideFormSignup() {
    const signupDiv = document.querySelector("#signup-div");
    signupDiv.classList.remove("opened");
    signupDiv.classList.add("closing");
    setTimeout(function() {
        signupDiv.classList.remove("closing");
        signupDiv.classList.add("closed");
    }, 0.3 * 1000);
};