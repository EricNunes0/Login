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
const port = 3001;

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
    if(operation == "CreateTable") {
        register.CreateTable(db);
    } else if(operation == "DropTable") {
        register.DropTable(db);
    }
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
    register.SelectEntireTable(db);
    database.close(db);
    console.log(`Servidor iniciado na porta ${port}!`);
});