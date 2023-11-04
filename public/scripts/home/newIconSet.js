function newIconSet(file) {
    let reader = new FileReader();
    reader.onload = function(e) {
        const newIcon = document.querySelector("#new-icon");
        newIcon.src = e.target.result;
        setTimeout(function() {
            const newIconOffsets = newIcon.getBoundingClientRect();
            const newIconWidth = parseInt(newIconOffsets.width);
            const newIconHeight = parseInt(newIconOffsets.height);
            cropResize(newIconWidth, newIconHeight);
        }, 100);
    };
    reader.readAsDataURL(file);
};