const trs = document.querySelectorAll(".table-tr");
for(const tr of trs) {
    tr.addEventListener("click", () => {
        if(tr.className.includes(`selected`)) {
            tr.classList.remove("selected");
        } else {
            tr.classList.add("selected");
        };
    });
};