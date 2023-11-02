const cropArrowTopLeft = document.querySelector(".crop-arrows.top-left");
const cropArrowTop = document.querySelector(".crop-arrows.top");
const cropArrowTopRight = document.querySelector(".crop-arrows.top-right");
const cropArrowLeft = document.querySelector(".crop-arrows.left");
const cropArrowRight = document.querySelector(".crop-arrows.right");
const cropArrowBottomLeft = document.querySelector(".crop-arrows.bottom-left");
const cropArrowBottom = document.querySelector(".crop-arrows.bottom");
const cropArrowBottomRight = document.querySelector(".crop-arrows.bottom-right");
var cropMinimumSize = 100;


function getNewIconSizes() {
    const newIcon = document.querySelector("#new-icon").getBoundingClientRect();
    return {
        width: newIcon.width,
        height: newIcon.height
    }
};

function checkSquarePositions() {
    const cropSquare = document.querySelector("#crop-square");
    if(parseInt(cropSquare.style.left.slice(0, 2)) < 0) {
        return false;
    };
    return true;
};

function getHeight(obj) {
    return parseInt(obj.style.height.slice(0, 2));
};

function getLeft(obj) {
    return parseInt(obj.style.left.slice(0, 2));
};

cropArrowBottom.addEventListener("mousedown", (e) => {
    const cropSquare = document.querySelector("#crop-square");
    let oldY = parseInt(cropSquare.style.height.slice(0, -2));
    let downRect = e.target.getBoundingClientRect();
    //let downX = e.clientX - downRect.left;
    let downY = e.clientY - downRect.top;
    let gapY = 0;
    let newY = 0;
    console.log("Altura original:", oldY);
    console.log("Altura clicada:", downY);
    console.log("Nova altura:", newY);
    popupCreate({message: `Top: ${downY}px`/*; Left: ${downX}px`*/, color: `red`});
    let active = true;
    window.addEventListener("mousemove", (e) => {
        if(active === true) {
            let moveRect = e.target.getBoundingClientRect();
            let moveY = e.clientY - moveRect.top;

            gapY = moveY - downY;
            newY = oldY + gapY;
            //console.warn("Diferença de altura:", gapY);
            //console.warn("Nova altura selecionada:", newY);
            const iconSizes = getNewIconSizes();
            if(newY > cropMinimumSize && newY < iconSizes.height) {
                cropSquare.style.width = newY + "px";
                cropSquare.style.height = newY + "px";
                if(checkSquarePositions()) {
                    cropSquare.style.left = `${getLeft(cropSquare)}px`;
                    console.error(cropSquare.style.left);
                    cropArrowBottom.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`;
                }
            };
        };
    });

    window.addEventListener("mouseup", () => {
        active = false;
    });
});