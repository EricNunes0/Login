const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session")
const database = require("./src/database");
const register = require("./src/register");
const dotenv = require("dotenv").config();
const createCookie = require("./src/createCookie");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './public/views');
app.set('trust proxy', 1);
app.use(session({
    name: "ericnunes",
    secret: process.env.COOKIES,
    resave: true,
    cookie: {
        secure: true,
        maxAge: 60000
    },
    saveUninitialized: true
}));

app.get("/", (req, res, next) => {
    res.render("index");
});

app.get("/login", (req, res, next) => {
    res.redirect("/");
});

app.post("/login", async(req, res, next) => {
    let body = req.body;
    
    let db = database.open();
    
    const email = body.email;
    const password = body.password;
    let query = `SELECT * FROM registers WHERE email = '${email}' LIMIT 1`;
    db.get(query, (err, row) => {
        //console.log("🌐 Este é o resultado:", row);
        if(!row) {
            let signupButton = "<button type = 'button' class = 'open-form-buttons' id = 'open-form-signup' onclick = 'openForms(); callSignupForm();'>Crie uma nova conta</button>";
            res.render("index", {error: {
                type: "\"EmailNotFound\"",
                message: `\"O e-mail que você inseriu não está cadastrado! ${signupButton}\"`
            }});
        } else {
            if(password !== row.password) {
                res.render("index", {error: {
                    type:"\"InvalidPassword\"",
                    message: "\"A senha inserida está incorreta! <a class = 'sign-warning-links' href = '/'>Esqueceu a senha?</a>\""
                }});
            } else {
                createCookie(res, `firstName`, row.firstName);
                createCookie(res, `lastName`, row.lastName);
                createCookie(res, `gender`, row.gender);
                res.redirect("../home");
            };
        };
    });
    database.close(db);
});

app.get("/signup", (req, res, next) => {
    res.redirect("/");
});

app.post("/signup", (req, res, next) => {
    const body = req.body;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const date = body.date;
    const gender = body.gender;
    const email = body.email;
    const phone = body.phone;
    const password = body.password;
    let db = database.open();

    let query = `SELECT * FROM registers WHERE email = '${email}'`;
    db.get(query, (err, row) => {
        if(row) {
            let loginButton = "<button type = 'button' class = 'open-form-buttons' id = 'open-form-login' onclick = 'openForms(); callLoginForm();'>Faça o login</button>";
            res.render("index", {error: {
                type: "\"EmailExists\"",
                message: `\"O e-mail que você inseriu já está cadastrado! ${loginButton}\"`
            }});
        } else {
            db.run(`
                INSERT INTO registers (firstName, lastName, date, gender, email, phone, password) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [firstName, lastName, date, gender, email, phone, password]
            );
            createCookie(res, `firstName`, firstName);
            createCookie(res, `lastName`, lastName);
            createCookie(res, `gender`, gender);
            res.redirect("../home");
        };
    });

    database.close(db);
});

app.get("/home", (req, res, next) => {
    function CookieExists(cookie) {
        return typeof cookie == "string";
    };
    if(CookieExists(req.cookies.firstName) && CookieExists(req.cookies.lastName) && CookieExists(req.cookies.gender)) {
        res.render("home", {user: {
            firstName: req.cookies.firstName,
            lastName: req.cookies.lastName,
            gender: req.cookies.gender
        }});
        return;
    };
    res.redirect("/");
});

app.get("/admin", (req, res, next) => {
    let db = database.open();

    let query = `SELECT * FROM registers`;
    db.all(query, (err, rows) => {
        console.log(rows);
        res.render("admin", {registers: rows});
    });
    database.close(db);
});

app.post("/admin", (req, res, next) => {
    let db = database.open();
    let body = req.body;
    let operation = body.operation;
    if(operation == "DELETE") {
        let ids = body.ids;
        for(const id of ids) {
            let query = `DELETE FROM registers WHERE ID = ${id}`;
            db.get(query, (err, row) => {
                console.log("DELETADO:", id);
            });
        };
    }
    database.close(db);
});

app.listen(process.env.PORT || port, () => {
    let db = database.open();
    register.CreateTable(db);
    database.close(db);
    console.log(`Servidor iniciado na porta ${port}!`);
});