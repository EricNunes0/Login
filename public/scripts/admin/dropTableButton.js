const dropTableButton = document.querySelector("#drop-table-button");

dropTableButton.addEventListener("click", () => {
    fetch("/admin", {
        method: "POST",
        body: JSON.stringify({
            operation: "DropTable"
        }),
        headers: {
            'Accept': 'application/json, text/plain, */*',
          "Content-type": "application/json; charset=UTF-8"
        }
    });
});