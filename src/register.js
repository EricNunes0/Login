const database = require("./database");

module.exports.CreateTable = (db) => {
    db.exec(`
        CREATE TABLE if not exists registers (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName VARCHAR(50) NOT NULL,
            lastName VARCHAR(50) NOT NULL,
            date DATE NOT NULL,
            gender VARCHAR(1) NOT NULL,
            email VARCHAR(100) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            password VARCHAR(50) NOT NULL
        )
    `);
};