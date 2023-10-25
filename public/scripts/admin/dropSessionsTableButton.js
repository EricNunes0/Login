const dropSessionsTableButton = document.querySelector("#drop-sessions-table-button");

dropSessionsTableButton.addEventListener("click", () => {
    fetch("/admin", {
        method: "POST",
        body: JSON.stringify({
            operation: "DropSessionsTable"
        }),
        headers: {
            'Accept': 'application/json, text/plain, */*',
          "Content-type": "application/json; charset=UTF-8"
        }
    });
});