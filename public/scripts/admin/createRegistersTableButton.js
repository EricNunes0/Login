const createRegistersTableButton = document.querySelector("#create-registers-table-button");

createRegistersTableButton.addEventListener("click", () => {
    fetch("/admin", {
        method: "POST",
        body: JSON.stringify({
            operation: "CreateRegistersTable"
        }),
        headers: {
            'Accept': 'application/json, text/plain, */*',
          "Content-type": "application/json; charset=UTF-8"
        }
    });
});