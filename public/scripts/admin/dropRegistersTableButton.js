const dropRegistersTableButton = document.querySelector("#drop-registers-table-button");

dropRegistersTableButton.addEventListener("click", () => {
    fetch("/admin", {
        method: "POST",
        body: JSON.stringify({
            operation: "DropRegistersTable"
        }),
        headers: {
            'Accept': 'application/json, text/plain, */*',
          "Content-type": "application/json; charset=UTF-8"
        }
    });
});