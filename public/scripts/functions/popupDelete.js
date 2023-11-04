function popupDelete(popup) {
    if(popup) {
        const popupAnimationDuration = 0.3;
        popup.classList.add("closed");
        setTimeout(function() {
            popup.remove();
        }, popupAnimationDuration * 1000);
    };
};