function mobileRotate() {
    const homeImageDiv = document.querySelector("#home-image-div");
    const video = document.querySelector("#mobile-video");

    function addRotate() {
        homeImageDiv.classList.add("rotate");
        video.play();
    };

    function removeRotate() {
        homeImageDiv.classList.remove("rotate");
        video.pause();
    };

    homeImageDiv.className.includes("rotate") ? removeRotate() : addRotate();
};