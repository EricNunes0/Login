const homeTitle = document.querySelector("#home-title");
const homeTitleText = "Login Node";
let delay = 0.1;

if(homeTitle) {
    homeTitleText.split("").forEach((letter) => {
        setTimeout(function() {
            homeTitle.innerHTML = homeTitle.innerHTML + letter;
        }, delay * 1000);
        delay += 0.1;
    });
};