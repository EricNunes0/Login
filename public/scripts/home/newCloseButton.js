const newCloseButton = document.querySelector("#new-close-button");

newCloseButton.addEventListener("click", () => {
    alterIconInputRemove();
    newIconRemove();
    fixedMenuClose();
});