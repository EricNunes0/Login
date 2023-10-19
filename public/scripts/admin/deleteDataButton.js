const deleteDataButton = document.querySelector("#delete-data-button");

deleteDataButton.addEventListener("click", () => {
    const trs = document.querySelectorAll(".table-tr");
    let ids = [];
    for(const tr of trs) {
        if(tr.className.includes(`selected`)) {
            ids.push(tr.querySelector("#id").textContent);
            tr.remove();
        };
    };
    fetch("/admin", {
        method: "POST",
        body: JSON.stringify({
            operation: "Delete",
            ids: ids
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    });
});