function oldIconLoadingEnd() {
    const oldIcon = document.querySelector("#old-icon");
    oldIcon.src = "";
    oldIcon.classList.remove("loading");
};