const homeMenuButtons = document.querySelectorAll(".home-menu-buttons");

for(const button of homeMenuButtons) {
    button.addEventListener("click", (e) => {
        console.log(button.id);
        homeMenuButtons.forEach((btn) => {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
    });
};