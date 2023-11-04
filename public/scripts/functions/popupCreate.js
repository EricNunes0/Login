function popupCreate({message, color}) {
    const popupAbsolute = document.querySelector("#popup-fixed");
    const popup = document.createElement("div");
    popup.className = `popups ${color}`;
    const popupBar = popupCreateBar();
    const popupMessageDiv = popupCreateMessageDiv(message);
    const popupIcon = popupCreateIcon(color);
    const popupButton = popupCreateDeleteButton();
    popup.appendChild(popupBar);
    popup.appendChild(popupIcon);
    popup.appendChild(popupMessageDiv);
    popup.appendChild(popupButton);
    popupAbsolute.appendChild(popup);
    popupRunAnimation(popup);

    popupButton.addEventListener("click", () => {
        popupDelete(popup);
    });
};

function popupCreateBar() {
    const popupBar = document.createElement("div");
    popupBar.className = "popup-bars";
    return popupBar;
};

function popupCreateIcon(color) {
    const i = document.createElement("i");
    i.className = `popup-icons ${color}`;
    return i;
};

function popupCreateMessageDiv(message) {
    const popupMessageDiv = document.createElement("div");
    popupMessageDiv.className = "popup-message-divs";

    const popupMessage = document.createElement("p");
    popupMessage.className = "popup-messages";
    popupMessage.textContent = message;
    
    popupMessageDiv.appendChild(popupMessage);
    return popupMessageDiv;
};

function popupCreateDeleteButton() {
    const button = document.createElement("button");
    button.className = `popup-buttons`;
    return button;
};