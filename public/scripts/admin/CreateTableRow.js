let rowNumber = 1;

function CreateTableRow({register}) {
    const tbody = document.querySelector("#table-tbody");

    const tr = document.createElement("tr");
    tr.className = `table-tr ${rowNumber}`;
    rowNumber === 1 ? rowNumber = 2 : rowNumber = 1;
    
    tr.appendChild(CreateTableData({dataname: "id", data: register.ID}));
    tr.appendChild(CreateTableData({dataname: "firstName", data: register.firstName}));
    tr.appendChild(CreateTableData({dataname: "lastName", data: register.lastName}));
    tr.appendChild(CreateTableData({dataname: "date", data: register.date}));
    tr.appendChild(CreateTableData({dataname: "gender", data: register.gender}));
    tr.appendChild(CreateTableData({dataname: "email", data: register.email}));
    tr.appendChild(CreateTableData({dataname: "phone", data: register.phone}));
    tr.appendChild(CreateTableData({dataname: "password", data: register.password}));

    tbody.appendChild(tr);
};