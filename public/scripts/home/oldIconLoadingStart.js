function oldIconLoadingStart() {
    const oldIcon = document.querySelector("#old-icon");
    const loadingImage = "../images/home/loading.gif";
    oldIcon.src = loadingImage;
    oldIcon.classList.add("loading");
};