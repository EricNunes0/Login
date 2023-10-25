const database = require("./database");

module.exports = (req, res, next) => {
    let body = req.body;
    let operation = body.operation;
    if(operation === "CreateRegistersTable") {
        const connection = database.open();
        register.CreateTable(connection);
    } else if(operation === "DropRegistersTable") {
        const connection = database.open();
        register.DropTable(connection);
    } else if(operation === "Delete") {
        const connection = database.open();
        let ids = body.ids;
        console.log(ids);
        connection.connect(function(e) {
            let query = `DELETE FROM registers WHERE userId IN ('${ids.join("\'")}')`;
            connection.query(query, (err, row) => {
                console.log("Registros deletados:", ids);
                database.close(connection);
            });
        });
    } else if(operation === "CreateSessionsTable") {
        const connection = database.open();
        createSessionsTable(connection);
    } else if(operation === "DropSessionsTable") {
        const connection = database.open();
        dropSessionsTable(connection);
    };
};