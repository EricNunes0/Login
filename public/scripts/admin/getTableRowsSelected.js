function getTableRowsSelected() {
    const trs = document.querySelectorAll(".table-tr");
    let ids = [];
    for(const tr of trs) {
        if(tr.className.includes(`selected`)) {
            ids.push(tr.querySelector("#userId").textContent);
        };
    };
    return ids;
};