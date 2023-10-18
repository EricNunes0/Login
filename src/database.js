const database = require("sqlite3").verbose();
const register = require("./register");

module.exports.open = () => {
    const db = new database.Database("./registers.db", (e) => {
        if(e) {
            throw new Error(e);
        };
    });
    return db;
};

module.exports.close = (db) => {
    db.close();
    //console.log("Conexão com banco de dados encerrada!");
};