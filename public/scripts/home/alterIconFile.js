const alterIconInput = document.querySelector("#alter-icon-input");

function updateIconFileValidate(file) {
    let minimumSize = 100;
    let fileWidth = file.width;
    let fileHeight = file.height;
    let maxMB = 3;
    let maxSize = 1024 * 1024 * maxMB;
    let fileSize = file.size;
    console.log(file, fileWidth, fileHeight);
    if(fileWidth < minimumSize || fileHeight < minimumSize) {
        popupCreate({message: `O tamanho mínimo para uma foto de perfil é ${minimumSize}x${minimumSize}px`, color: `red`});
        return false;
    };
    if(fileSize > maxSize) {
        popupCreate({message: `O tamanho da sua imagem não pode ultrapassar ${maxMB}MB`, color: `red`});
        return false;
    };
    return true;
};

alterIconInput.addEventListener("change", (e) => {
    const newIconArea = document.querySelector("#new-icon-area");
    if(alterIconInput.value) {
        let file = alterIconInput.files[0];
        if(updateIconFileValidate(file)) {
            fixedDivClose();
            newIconArea.classList.remove("closed");
            newIconSet(file);
        };
    } else {
        newIconArea.classList.add("closed");
    };
});