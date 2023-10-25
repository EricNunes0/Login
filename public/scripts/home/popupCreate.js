function popupCreate({message, color}) {
    const popupAbsolute = document.querySelector("#popup-absolute");
    const popup = document.createElement("div");
    popup.className = `popups ${color}`;
    const popupBar = popupCreateBar();
    const popupMessageDiv = popupCreateMessageDiv(message);
    popup.appendChild(popupBar);
    popup.appendChild(popupMessageDiv);
    popupAbsolute.appendChild(popup);
    popupRunAnimation(popup);
};

function popupCreateBar() {
    const popupBar = document.createElement("div");
    popupBar.className = "popup-bars";
    return popupBar;
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