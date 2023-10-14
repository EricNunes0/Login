function removeInputErrors() {
    const textInputs = document.querySelectorAll(".sign-text-inputs");
    const warningIcons = document.querySelectorAll(".input-warning-icons");
    textInputs.forEach((input) => {
        input.style.outline = "none";
    });
    warningIcons.forEach((icon) => {
        icon.classList.add("hide")
    });
};