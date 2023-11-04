const cropSize = document.querySelector("#crop-size");
const cropX = document.querySelector("#crop-x");
const cropY = document.querySelector("#crop-y");
var cropMinimumSize = 100;

function cropSquareSizeGet() {
    const cropSquare = document.querySelector("#crop-square");
    return {
        width: parseInt(cropSquare.style.width.slice(0, -2)),
        height: parseInt(cropSquare.style.height.slice(0, -2)),
        top: parseInt(cropSquare.style.top.slice(0, -2)),
        left: parseInt(cropSquare.style.left.slice(0, -2)),
    }
};

function cropSquareSizeSet(size) {
    const cropSquare = document.querySelector("#crop-square");
    cropSquare.style.width = size + "px";
    cropSquare.style.height = size + "px";
};

function cropSquareXSet(x) {
    const cropSquare = document.querySelector("#crop-square");
    cropSquare.style.left = x + "px";
};

function cropSquareYSet(y) {
    const cropSquare = document.querySelector("#crop-square");
    cropSquare.style.top = y + "px";
};

function cropSizeSet(size) {
    const cropSize = document.querySelector("#crop-size");
    cropSize.value = size;
};

function cropXSet(x) {
    const cropX = document.querySelector("#crop-x");
    cropX.value = x;
};

function cropYSet(y) {
    const cropY = document.querySelector("#crop-y");
    cropY.value = y;
};

cropSize.addEventListener("change", (e) => {
    let size = parseInt(e.target.value);
    const cropSquareSizes = cropSquareSizeGet();
    const top = cropSquareSizes.top;
    const left = cropSquareSizes.left;
    const newIcon = document.querySelector("#new-icon");
    const newIconOffsets = newIcon.getBoundingClientRect();
    const newIconWidth = newIconOffsets.width;
    const newIconHeight = newIconOffsets.height;
    if(size < cropMinimumSize) {
        e.target.value = cropMinimumSize;
    } else if(size >= newIconWidth || size >= newIconHeight) {
        e.target.value = parseInt(newIconWidth) > parseInt(newIconHeight) ? parseInt(newIconHeight) : parseInt(newIconWidth);
    } else if((top + size) > newIconHeight) {
        e.target.value = parseInt(newIconHeight - top);
    } else if((left + size) > newIconWidth) {
        e.target.value = parseInt(newIconWidth - left);
    };
    cropSquareSizeSet(e.target.value);
    return;
});

/* Evento do crop X */
cropX.addEventListener("change", (e) => {
    let x = parseInt(e.target.value);
    const cropSquareSizes = cropSquareSizeGet();
    const squareWidth = cropSquareSizes.width;
    const newIcon = document.querySelector("#new-icon");
    const newIconOffsets = newIcon.getBoundingClientRect();
    const newIconWidth = newIconOffsets.width;
    if(x < 0) {
        e.target.value = 0;
    };
    if(x + squareWidth > newIconWidth) {
        e.target.value = parseInt(newIconWidth - squareWidth);
    };
    cropSquareXSet(e.target.value);
});

/* Evento do crop Y */
cropY.addEventListener("change", (e) => {
    let y = parseInt(e.target.value);
    const cropSquareSizes = cropSquareSizeGet();
    const squareHeight= cropSquareSizes.height;
    const newIcon = document.querySelector("#new-icon");
    const newIconOffsets = newIcon.getBoundingClientRect();
    const newIconHeight = newIconOffsets.height;
    if(y < 0) {
        e.target.value = 0;
    };
    if(y + squareHeight > newIconHeight) {
        e.target.value = parseInt(newIconHeight - squareHeight);
    };
    cropSquareYSet(e.target.value);
});