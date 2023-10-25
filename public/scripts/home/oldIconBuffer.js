function oldIconBuffer(data) {
    const oldIcon = document.querySelector("#old-icon");
    function toBase64(arr) {
        return btoa(
            arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
    };
    let iconBase64 = toBase64(data);
    let userAvatar = `data:image/png;base64,${iconBase64}`;
    oldIcon.src = userAvatar;
};