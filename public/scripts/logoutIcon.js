const homeLogoutButton = document.querySelector("#home-logout-button");
const logoutIconG = document.querySelector("#logout-icon-g");

if(homeLogoutButton) {
    homeLogoutButton.addEventListener("mouseenter", () => {
        logoutIconG.style.fill = "#fff";
    });
    homeLogoutButton.addEventListener("mouseleave", () => {
        logoutIconG.style.removeProperty("fill");
    });
};