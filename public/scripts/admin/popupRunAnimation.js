function popupRunAnimation(popup) {
    if(popup) {
        const popupBar = popup.querySelector(".popup-bars");
        const popupAnimationDuration = 5;
        let percent = 100;
        let popupInterval = setInterval(function() {
            popupBar.style.width = `${percent}%`;
            percent--;
            if(percent === 0) {
                clearInterval(popupInterval);
                popupDelete(popup);
            };
        }, (popupAnimationDuration / 100) * 1000);
    };
};