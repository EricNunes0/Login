function closeForms() {
    const backgroundDiv = document.querySelector("#home-background-div");
    backgroundDiv.style.right = "0";

    
    document.querySelector("#home-area").classList.remove("right");
    document.querySelector("#home-image-section").style.removeProperty("transform");
    document.querySelector("#home-form-section").classList.remove("right");
};