const adminAddButton = document.querySelector("#admin-add-button");

adminAddButton.addEventListener("click", () => {
    const trs = document.querySelectorAll(".table-tr");
    let ids = [];
    for(const tr of trs) {
        if(tr.className.includes(`selected`)) {
            ids.push(tr.querySelector("#userId").textContent);
        };
    };
    console.log(userId);
    fetch("/admin-add", {
        method: "POST",
        body: JSON.stringify({
            userId: userId,
            ids: ids
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json()).then((data) => {
        console.log(data);
        if(data.message) {
            popupCreate({message: data.message, color: `green`});
        };
        if(data.error) {
            popupCreate({message: data.error, color: `green`});
        };
    }).catch((e) => {
        console.error(e);
    });
});