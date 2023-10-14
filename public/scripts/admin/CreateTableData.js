function CreateTableData({dataname, data}) {
    const td = document.createElement("td");
    td.className = "table-data";
    td.id = dataname;
    td.innerHTML = data;
    return td;
};