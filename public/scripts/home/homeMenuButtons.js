const homeMenuButtons = document.querySelectorAll(".home-menu-buttons");

function homeAreaUser() {
    document.querySelectorAll(".areas").forEach((area) => {
        area.classList.remove("selected");
    });
    homeMenuButtons.forEach((btn) => {
        btn.classList.remove("selected");
    });
    document.querySelector("#user-area").classList.add("selected");
    document.querySelector("#menu-user-button").classList.add("selected");
};

function homeAreaInfo() {
    document.querySelectorAll(".areas").forEach((area) => {
        area.classList.remove("selected");
    });
    homeMenuButtons.forEach((btn) => {
        btn.classList.remove("selected");
    });
    document.querySelector("#info-area").classList.add("selected");
    document.querySelector("#menu-info-button").classList.add("selected");
};

for(const button of homeMenuButtons) {
    button.addEventListener("click", (e) => {
        switch(button.id) {
            case "menu-user-button":
                homeAreaUser();
                break;
            case "menu-info-button":
                homeAreaInfo();
                break;
        };
    });
};