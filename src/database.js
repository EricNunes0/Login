const database = require("sqlite3").verbose();
const mysql = require("mysql2");
const dotenv = require("dotenv").config();

module.exports.open = () => {
    /*let databaseConfigs = {
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    };*/
    let databaseConfigs = process.env.DATABASE_URL;
    const connection = mysql.createConnection(databaseConfigs);
    console.log("〔🟢〕Conexão com banco de dados iniciada!");
    return connection;
};

module.exports.close = (connection) => {
    connection.end();
    console.log("〔🔴〕Conexão com banco de dados encerrada!");
};