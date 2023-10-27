const adminRemoveButton = document.querySelector("#admin-remove-button");

adminRemoveButton.addEventListener("click", () => {
    const ids = getTableRowsSelected();
    if(ids.length <= 0) {
        popupCreate({message: `Nenhum usuário selecionado!`, color: `red`});
        return;
    };
    const progress = confirm(`Você tem certeza de que deseja remover ${ids.length} ${ids.length === 1 ? "administrador" : "administradores"}?`);
    if(progress) {
        fetch("/admin-remove", {
            method: "POST",
            body: JSON.stringify({
                userId: userId,
                ids: ids
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json()).then((data) => {
            console.log(data);
            if(data.message) {
                popupCreate({message: data.message, color: `green`});
            };
            if(data.error) {
                popupCreate({message: data.error, color: `red`});
            };
        }).catch((e) => {
            console.error(e);
        });
    };
});