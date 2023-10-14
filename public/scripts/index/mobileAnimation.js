const homeImage = document.querySelector("#home-image");

const mobileImages = [
    {
        "image": "../images/mobile/mobile(0).png",
        "hue": "0"
    },
    {
        "image": "../images/mobile/mobile(1).png",
        "hue": "235"
    },
    {
        "image": "../images/mobile/mobile(2).png",
        "hue": "100"
    },
    {
        "image": "../images/mobile/mobile(3).png",
        "hue": "290"
    },
    {
        "image": "../images/mobile/mobile(4).png",
        "hue": "130"
    },
    {
        "image": "../images/mobile/mobile(5).png",
        "hue": "140"
    }
];

if(homeImage) {
    setInterval(function() {
        let key = mobileImages[Math.floor(Math.random() * mobileImages.length)];
        homeImage.style.backgroundImage = `url("${key.image}")`;
        backgroundHueRotate(key.hue);
    }, 5000);
};