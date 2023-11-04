const alterConfirm = document.querySelector("#alter-confirm");

alterConfirm.addEventListener("click", async (e) => {
    /* Pegando o ícone do input de arquivos */
    const alterIconInput = document.querySelector("#alter-icon-input");
    let icon = alterIconInput.files[0];

    /* Fechando área de confirmar/cortar novo ícone */
    newIconAreaClose();
    loadingAreaOpen();

    /* Obtendo informações para cortar a imagem */
    const crop = cropSquareSizeGet();
    const cropWidth = crop.width;
    const cropHeight = crop.height;
    const cropY = crop.top;
    const cropX = crop.left;

    /* Referenciando o canvas da imagem */
    const canvas = document.querySelector("#icon-canvas");
    const ctx = canvas.getContext("2d");
    
    /* Obtendo informações do img do ícone novo */
    const newIcon = document.querySelector("#new-icon");
    const newIconOffsets = newIcon.getBoundingClientRect();
    const newIconWidth = newIconOffsets.width;
    const newIconHeight = newIconOffsets.height;
    
    /* Convertendo o arquivo do ícone para DataUrl */
    let iconConverted = await convertFileToData(icon);

    /* Criando uma nova imagem para abrir o ícone convertido */
    const img = new Image(newIconWidth, newIconHeight);
    img.src = iconConverted;
    img.onload = function() {
        canvas.width = cropWidth;
        canvas.height = cropHeight;

        /* Redimensionando imagem */
        let resizeWidth = newIconWidth;
        let resizeHeight = newIconHeight;
        let resizeCanvas = document.createElement("canvas");
        let resizeContext = resizeCanvas.getContext('2d');
        resizeCanvas.width = resizeWidth;
        resizeCanvas.height = resizeHeight;
        var data;
        let resizedImage = new Image(resizeWidth, resizeHeight);
        resizedImage.src = iconConverted;
        resizedImage.onload = function() {
            resizeContext.drawImage(resizedImage, 0, 0, resizeWidth, resizeHeight);
            data = resizeCanvas.toDataURL("image/png");
            let posImage = new Image(resizeWidth, resizeHeight);
            posImage.src = data;
            posImage.onload = async function() {
                ctx.drawImage(posImage, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
                let iconData = canvas.toDataURL("image/png");
                let formData = new FormData();
                formData.append("userId", userId);
                formData.append("icon", iconData);
                await fetch("/update-icon", {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json, text/plain, */*"
                    }
                }).then((response) => response.json()).then((data) => {
                    fixedMenuClose();
                    if(data.message) {
                        popupCreate({message: data.message, color: "green"});
                        userIconImageSet(iconData);
                        fixedMainIconSet(iconData);
                        return;
                    };
                    if(data.error) {
                        popupCreate({message: data.error, color: "red"});
                        return;
                    };
                }).catch((e) => {
                    console.log(e)
                    fixedMenuClose();
                    popupCreate({message: "Houve um erro ao atualizar a foto de perfil!", color: "red"});
                    return;
                });
            }
        }
    };
});

