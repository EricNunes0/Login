const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const database = require("./src/database");
const register = require("./src/register");
const dotenv = require("dotenv").config();
const createCookie = require("./src/cookies/createCookie");
const getCookie = require("./src/cookies/getCookie");
const loginController = require("./src/validation/loginController");
const loginValidator = require("./src/validation/loginValidator");
const signController = require("./src/validation/signupController");
const signupValidator = require("./src/validation/signupValidator");

const app = express();
const port = 3001 || process.env.PORT;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
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
    //const id = uuidv4(); // Gerar id aleatório para as sessões
    //let firstName = getCookie(req, "firstName"); // Buscar cookie
    res.render("index");
});

app.get("/login", (req, res, next) => {
    res.redirect("/");
});

app.post("/login", loginValidator.form, loginController.loginController);

app.get("/signup", (req, res, next) => {
    res.redirect("/");
});

app.post("/signup", signupValidator.form, signController.signupController);

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
    const connection = database.open();
    connection.connect(function(e) {
        if(e) {throw new Error(e)};
        let query = `SELECT * FROM registers;`;
        connection.query(query, (err, rows) => {
            database.close(connection);
            res.render("admin", {registers: rows});
        });
    });
});

app.post("/admin", (req, res, next) => {
    let body = req.body;
    let operation = body.operation;
    if(operation == "CreateTable") {
        const connection = database.open();
        register.CreateTable(connection);
    } else if(operation == "DropTable") {
        const connection = database.open();
        register.DropTable(connection);
    } else if(operation == "Delete") {
        const connection = database.open();
        let ids = body.ids;
        console.log(ids);
        connection.connect(function(e) {
            let query = `DELETE FROM registers WHERE ID IN (${ids})`;
            connection.query(query, (err, row) => {
                console.log("DELETADOS:", ids);
            });
        });
    }
});

app.listen(process.env.PORT || port, () => {
    console.log(`Servidor iniciado na porta ${port}!`);
});