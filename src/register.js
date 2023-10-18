const database = require("./database");

module.exports.CreateTable = (db) => {
    let tableName = "registers";
    db.exec(`
        CREATE TABLE if not exists ${tableName} (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
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
    `);
    console.log(`〔✅〕CreateTable: Tabela ${tableName} criada com sucesso!`);
};

module.exports.SelectEntireTable = (db) => {
    let x = db.all(`
        SELECT * FROM registers;
    `, (err, rows) => {
        console.log(rows);
    });
};

module.exports.DropTable = (db) => {
    let tableName = "registers";
    db.exec(`
        DROP TABLE if exists registers;
    `);
    console.log(`〔✅〕DropTable: Tabela ${tableName} deletada com sucesso!`);
};