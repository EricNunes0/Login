const removeCancelButton = document.querySelector("#remove-cancel");

removeCancelButton.addEventListener("click", () => {
    alterIconInputRemove();
    oldIconRemove();
    removeIconAreaClose();
    fixedDivOpen();
});