const alterCancel = document.querySelector("#alter-cancel");

alterCancel.addEventListener("click", (e) => {
    const alterIconInput = document.querySelector("#alter-icon-input");
    const newIcon = document.querySelector("#new-icon");
    alterIconInput.value = "";
    newIcon.src = "";
    fixedMenuClose();
});