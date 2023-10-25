const removeConfirmButton = document.querySelector("#remove-confirm");

removeConfirmButton.addEventListener("click", async() => {
    removeIconAreaClose();
    loadingAreaOpen();
    await fetch("/remove-icon", {
        method: "POST",
        body: JSON.stringify({
            userId: userId
        }),
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json()).then((data) => {
        if(data.message) {
            popupCreate({message: `Foto de perfil removida!`, color: `green`});
            oldIconLoadingEnd();
            fixedMenuClose();
            userIconSet(standardUserIcon);
            fixedMainIconSet(standardUserIcon);
            return;
        };
        if(data.error) {
            popupCreate({message: data.error, color: `red`});
            oldIconLoadingEnd();
            fixedMenuClose();
            return;
        };
    }).catch((e) => {
        console.error(e);
        popupCreate({message: "Não foi possível remover sua foto de perfil!", color: `red`});
        oldIconLoadingEnd();
        fixedMenuClose();
        return;
    });
});