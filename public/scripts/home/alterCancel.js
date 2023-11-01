const alterCancel = document.querySelector("#alter-cancel");

alterCancel.addEventListener("click", (e) => {
    const alterIconInput = document.querySelector("#alter-icon-input");
    alterIconInput.value = "";
    newIconRemove();
    fixedMenuClose();
});