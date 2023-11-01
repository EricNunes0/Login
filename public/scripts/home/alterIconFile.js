const alterIconInput = document.querySelector("#alter-icon-input");

alterIconInput.addEventListener("change", (e) => {
    const newIconArea = document.querySelector("#new-icon-area");
    if(alterIconInput.value) {
        fixedDivClose();
        newIconArea.classList.remove("closed");
        newIconSet(alterIconInput.files[0])
    } else {
        newIconArea.classList.add("closed");
    };
});