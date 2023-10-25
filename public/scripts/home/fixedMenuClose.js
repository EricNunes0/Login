function fixedMenuClose() {
    const fixedMenu = document.querySelector("#home-fixed-menu");
    fixedMenu.classList.add("closed");
    fixedClosedAreaClose();
    fixedDivClose();
    newIconAreaClose();
    removeIconAreaClose();
    loadingAreaClose();

    alterIconInputRemove();
    newIconRemove();
};