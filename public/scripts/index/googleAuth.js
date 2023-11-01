const googleButton = document.querySelector("#google-button");

googleButton.addEventListener("click", () => {
    function googleButtonAnimationStart() {
        googleButton.classList.add("on");
    };
    function googleButtonAnimationEnd() {
        googleButton.classList.remove("on");
    };
    googleButtonAnimationStart();
    window.location.href = "/auth/google";
});