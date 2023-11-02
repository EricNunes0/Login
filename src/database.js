const mysql = require("mysql2");
require("dotenv").config();

module.exports.open = () => {
    let databaseConfigs = process.env.DATABASE_URL;
    let connection = mysql.createConnection(databaseConfigs);
    console.log("〔🟢〕Conexão com banco de dados iniciada!");
    return connection;
};

module.exports.close = (connection) => {
    connection.end();
    console.log("〔🔴〕Conexão com banco de dados encerrada!");
};