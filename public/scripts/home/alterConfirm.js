const alterConfirm = document.querySelector("#alter-confirm");

alterConfirm.addEventListener("click", async (e) => {
    const alterIconInput = document.querySelector("#alter-icon-input");
    let icon = alterIconInput.files[0];
    newIconAreaClose();
    loadingAreaOpen();
    let formData = new FormData(); 
    formData.append("userId", userId);
    formData.append("icon", icon);
    await fetch("/update-icon", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json, text/plain, */*",
            /*"Content-type": "application/json; charset=UTF-8"*/
        }
    }).then((response) => response.json()).then((data) => {
        fixedMenuClose();
        if(data.message) {
            popupCreate({message: data.message, color: "green"});
            userIconFileRead(icon);
            fixedMainIconFileRead(icon);
            return;
        };
        if(data.error) {
            popupCreate({message: data.error, color: "red"});
            return;
        };
    }).catch((e) => {
        popupCreate({message: "Houve um erro ao atualizar a foto de perfil!", color: "red"});
        return;
    });
});