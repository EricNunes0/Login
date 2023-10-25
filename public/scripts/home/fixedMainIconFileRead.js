function fixedMainIconFileRead(file) {
    const fixedMainIcon = document.querySelector("#fixed-main-icon");
    let reader = new FileReader();
    reader.onload = function(e) {
        fixedMainIcon.src = e.target.result;
    };
    reader.readAsDataURL(file);
};