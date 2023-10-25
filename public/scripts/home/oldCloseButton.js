const oldCloseButton = document.querySelector("#old-close-button");

oldCloseButton.addEventListener("click", () => {
    alterIconInputRemove();
    oldIconRemove();
    fixedMenuClose();
});