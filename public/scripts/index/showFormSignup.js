function showFormSignup() {
    const signupDiv = document.querySelector("#signup-div");
    signupDiv.classList.remove("closed");
    signupDiv.classList.add("opening");
    setTimeout(function() {
        signupDiv.classList.remove("opening");
        signupDiv.classList.add("opened");
    }, 0.3 * 1000);
};