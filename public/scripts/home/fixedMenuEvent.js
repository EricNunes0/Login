let fixedCloseArea = document.querySelector("#fixed-close-area");

fixedCloseArea.addEventListener("click", () => {
    fixedCloseArea = document.querySelector("#fixed-close-area");
    fixedCloseArea.className.includes("closed") ? fixedMenuOpen() : fixedMenuClose();
});