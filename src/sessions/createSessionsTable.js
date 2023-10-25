const database = require("../database");

module.exports = (connection) => {
    let tableName = "sessions";
    connection.connect(function(e) {
        if(e) throw new Error(e);
        connection.query(`
            CREATE TABLE if not exists ${tableName} (
                userId VARCHAR(50) NOT NULL,
                sessionId VARCHAR(50) NOT NULL,
                created BIGINT NOT NULL,
                expires BIGINT NOT NULL
            )
        `, function(e, result) {
            if(e) throw new Error(e);
            console.log(`〔✅〕CreateSessionsTable: Tabela ${tableName} criada com sucesso!`);
            database.close(connection);
        });
    });
};