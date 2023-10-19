const database = require("./database");

module.exports.CreateTable = (connection) => {
    let tableName = "registers";
    connection.connect(function(e) {
        if(e) throw new Error(e);
        connection.query(`
            CREATE TABLE if not exists ${tableName} (
                ID INTEGER PRIMARY KEY AUTO_INCREMENT,
                firstName VARCHAR(50) NOT NULL,
                lastName VARCHAR(50) NOT NULL,
                date DATE NOT NULL,
                gender VARCHAR(1) NOT NULL,
                email VARCHAR(100) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                password VARCHAR(50) NOT NULL,
                admin BOOLEAN DEFAULT '0' NOT NULL,
                icon LONGBLOB
            )
        `, function(e, result) {
            if(e) throw new Error(e);
            console.log(`〔✅〕CreateTable: Tabela ${tableName} criada com sucesso!`);
            database.close(connection);
        });
    });
};

module.exports.SelectEntireTable = (connection) => {
    let tableName = "registers";
    connection.connect(function(e) {
        if(e) {throw new Error(e);};
        connection.query(`SELECT * FROM ${tableName};`, function(err, rows) {
            console.log(rows);
        });
    });
};

module.exports.DropTable = (connection) => {
    let tableName = "registers";
    connection.connect(function(e) {
        if(e) throw new Error(e);
        connection.query(`DROP TABLE if exists ${tableName};`, function(e, result) {
        console.log(`〔🧨〕DropTable: Tabela ${tableName} deletada com sucesso!`);
        });
    });
};