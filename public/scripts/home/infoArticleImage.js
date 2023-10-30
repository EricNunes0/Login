const infoArticleImage = document.querySelector("#info-article-image");

infoArticleImage.addEventListener("click", () => {
    console.log("click");
    let animationDuration = 1;
    if(!infoArticleImage.className.includes("spin")) {
        infoArticleImage.classList.add("spin");
        setTimeout(function() {
            infoArticleImage.classList.remove("spin");
        }, animationDuration * 1000);
    };
});