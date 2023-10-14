function openForms() {
    const backgroundDiv = document.querySelector("#home-background-div");
    backgroundDiv.style.right = "50%";

    document.querySelector("#home-area").classList.add("right");
    document.querySelector("#home-image-section").style.transform = "translateX(25%)";
    document.querySelector("#home-form-section").classList.add("right");
};