const database = require("sqlite3").verbose();
const mysql = require("mysql");
const dotenv = require("dotenv").config();

module.exports.open = () => {
    const connection = mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    });
    console.log("〔🟢〕Conexão com banco de dados iniciada!");
    return connection;
};

module.exports.close = (connection) => {
    connection.end();
    console.log("〔🔴〕Conexão com banco de dados encerrada!");
};