const oldReturnButton = document.querySelector("#old-return-button");

oldReturnButton.addEventListener("click", () => {
    alterIconInputRemove();
    oldIconRemove();
    removeIconAreaClose();
    fixedDivOpen();
});