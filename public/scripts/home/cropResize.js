function cropResize(width, height) {
    let minSize = 100;
    const cropSquare = document.querySelector("#crop-square");

    width = width < minSize ? minSize : width;
    height = height < minSize ? minSize : height;
    console.log(width, height)
    if(width >= height) {
        /* Altura predominante */
        cropSquare.style.width = height + "px";
        cropSquare.style.height = height + "px";
        cropSquare.style.top = 0;
        cropSquare.style.left = `${(width - height) / 2}px`;
    } else {
        /* Largura predominante */
        cropSquare.style.width = width + "px";
        cropSquare.style.height = width + "px";
        cropSquare.style.top = 0;
        cropSquare.style.left = `${(height - width) / 2}px`;
    };

};