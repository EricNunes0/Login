function userIconFileRead(file) {
    const userIcon = document.querySelector("#user-icon");
    let reader = new FileReader();
    reader.onload = function(e) {
        userIcon.src = e.target.result;
    };
    reader.readAsDataURL(file);
};