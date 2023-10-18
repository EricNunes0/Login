const createTableButton = document.querySelector("#create-table-button");

createTableButton.addEventListener("click", () => {
    fetch("/admin", {
        method: "POST",
        body: JSON.stringify({
            operation: "CreateTable"
        }),
        headers: {
            'Accept': 'application/json, text/plain, */*',
          "Content-type": "application/json; charset=UTF-8"
        }
    });
});