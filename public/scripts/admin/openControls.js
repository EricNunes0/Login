const openButton = document.querySelector("#controls-open-button");

if(openButton) {
    openButton.addEventListener("click", () => {
        const controlsMain = document.querySelector("#controls-main");
        const controlsArea = document.querySelector("#controls-area");
        const controlsOpenImage = document.querySelector("#controls-open-image");
        if(controlsMain.className.includes(`closed`)) {
            controlsMain.classList.remove(`closed`);
            controlsArea.classList.remove(`closed`);
            controlsArea.style.removeProperty(`transform`);
            controlsOpenImage.classList.remove(`closed`);
        } else {
            controlsMain.classList.add(`closed`);
            controlsArea.classList.add(`closed`);
            controlsArea.style.transform = `translateY(calc(var(--controls-button-size) + calc(var(--controls-button-margin) * 2)))`;
            controlsOpenImage.classList.add(`closed`);
        };
    });
};