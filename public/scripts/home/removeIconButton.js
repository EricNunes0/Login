const removeIconButton = document.querySelector("#remove-icon-button");

removeIconButton.addEventListener("click", async() => {
    const removeIconConfirmArea = document.querySelector("#remove-icon-confirm-area");
    removeIconConfirmArea.classList.remove("closed");
    fixedDivClose();
    oldIconLoadingStart();
    await fetch("/get-icon", {
        method: "POST",
        body: JSON.stringify({
            userId: userId
        }),
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json()).then((data) => {
        console.log(data);
        if(data.icon) {
            popupCreate({message: `Ícone carregado!`, color: `green`});
            oldIconLoadingEnd();
            oldIconBuffer(data.icon.data);
            return;
        } else {
            oldIconLoadingEnd();
            oldIconSet(standardUserIcon);
        };
        if(data.error) {
            popupCreate({message: data.error, color: `red`});
            oldIconLoadingEnd();
            return;
        };
    }).catch((e) => {
        console.error(e);
        popupCreate({message: "Não foi possível encontrar sua foto de perfil!", color: `red`});
        oldIconLoadingEnd();
        return;
    });
});