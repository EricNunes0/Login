const database = require("../database");

module.exports = (connection) => {
    let tableName = "sessions";
    connection.connect(function(e) {
        if(e) throw new Error(e);
        connection.query(`DROP TABLE if exists ${tableName};`, function(e, result) {
            console.log(`〔🧨〕DropTable: Tabela ${tableName} deletada com sucesso!`);
            database.close(connection);
        });
    });
};