const googleButton = document.querySelector("#google-button");

googleButton.addEventListener("click", () => {
    function googleButtonAnimationStart() {
        googleButton.classList.add("on");
    };
    function googleButtonAnimationEnd() {
        googleButton.classList.remove("on");
    };

    googleButtonAnimationStart();
    window.location.href = "/auth/google/"
    /*fetch("/auth/google", {
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */ /*",
            /*"Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json()).then((data) => {
        googleButtonAnimationEnd();
        if(data.error) {
            loginErrorAlert(data.message);
            return;
        };
        console.log("Validado!");
    }).catch((e) => {
        googleButtonAnimationEnd();
        loginErrorAlert("Houve um erro ao fazer a conexão com a API do Google!");
        return;
    });`*/
});