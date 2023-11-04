function cropResize(width, height) {
    let minSize = 100;
    const cropSquare = document.querySelector("#crop-square");

    width = width < minSize ? minSize : width;
    height = height < minSize ? minSize : height;
    if(width >= height) {
        /* Altura predominante */
        let size = height;
        let x = (width - height) / 2;
        let y = 0;
        /* Configurando */
        cropSquare.style.width = height + "px";
        cropSquare.style.height = height + "px";
        cropSquare.style.top = y;
        cropSquare.style.left = `${x}px`;
        cropSizeSet(size);
        cropXSet(x);
        cropYSet(y);
    } else {
        /* Largura predominante */
        let size = width;
        let x = (height - width) / 2;
        let y = 0;
        /* Configurando */
        cropSquare.style.width = width + "px";
        cropSquare.style.height = width + "px";
        cropSquare.style.top = y;
        cropSquare.style.left = `${x}px`;
        cropSizeSet(size);
        cropXSet(x);
        cropYSet(y);
    };

};