const homeImage = document.querySelector("#home-image");

if(homeImage) {
    setInterval(function() {
        homeImage.style.backgroundImage = `url("../images/mobile/mobile(${Math.floor(Math.random() * 5)}).png")`;
    }, 5000);
};