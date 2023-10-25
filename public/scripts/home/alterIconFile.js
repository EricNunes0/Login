const alterIconInput = document.querySelector("#alter-icon-input");

alterIconInput.addEventListener("change", (e) => {
    const newIconArea = document.querySelector("#new-icon-area");
    const newIcon = document.querySelector("#new-icon");
    if(alterIconInput.value) {
        fixedDivClose();
        newIconArea.classList.remove("closed");
        let reader = new FileReader();
        reader.onload = function(e) {
            newIcon.src = e.target.result;
        };
        reader.readAsDataURL(alterIconInput.files[0]);
    } else {
        newIconArea.classList.add("closed");
    };
});