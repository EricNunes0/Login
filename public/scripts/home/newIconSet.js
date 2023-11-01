function newIconSet(file) {
    const newIcon = document.querySelector("#new-icon");
    let reader = new FileReader();
    reader.onload = function(e) {
        newIcon.src = e.target.result;
        const newIconWidth = newIcon.offsetWidth;
        const newIconHeight = newIcon.offsetHeight;
        console.log(newIconWidth, newIconHeight);
        cropResize(newIconWidth, newIconHeight);
    };
    reader.readAsDataURL(file);
};