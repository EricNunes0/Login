function fixedMenuOpen() {
    const fixedMenu = document.querySelector("#home-fixed-menu");
    fixedMenu.classList.remove("closed");
    fixedClosedAreaOpen();
    fixedDivOpen();
    
    alterIconInputRemove();
    newIconRemove();
};