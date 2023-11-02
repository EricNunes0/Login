const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const passport = require("passport");
require("./src/validation/passportConfigs")
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const database = require("./src/database");
const register = require("./src/register");
const adminAdd = require("./src/admin/adminAdd");
const adminGet = require("./src/admin/adminGet");
const adminPost = require("./src/admin/adminPost");
const adminRemove = require("./src/admin/adminRemove");
const authGoogle = require("./src/validation/authGoogle");
const createCookie = require("./src/cookies/createCookie");
const createSessionsTable = require("./src/sessions/createSessionsTable");
const deleteCookie = require("./src/cookies/deleteCookie");
const dropSessionsTable = require("./src/sessions/dropSessionsTable");
const getCookie = require("./src/cookies/getCookie");
const getIcon = require("./src/getIcon");
const homeGet = require("./src/home/homeGet");
const loginController = require("./src/validation/loginController");
const loginValidator = require("./src/validation/loginValidator");
const signController = require("./src/validation/signupController");
const signupValidator = require("./src/validation/signupValidator");
const removeIcon = require("./src/removeIcon");
const updateIcon = require("./src/updateIcon");

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
        maxAge: 1000 * 60 * 60 * 24
    },
    saveUninitialized: true
}));

var userSession;
app.get("/", (req, res, next) => {
    let sessionId = getCookie(req, "sessionId");
    if(sessionId) {
        return res.redirect("/home");
    } else {
        return res.render("index");
    };
});

app.get("/login", (req, res, next) => {
    res.redirect("/");
});

app.post("/login", loginValidator.form, loginController.loginController);

app.get("/signup", (req, res, next) => {
    res.redirect("/");
});

app.post("/signup", signupValidator.form, signController.signupController);

app.get("/auth/google", passport.authenticate("google", {scope: ["profile", "email"]}));

app.get("/auth/google/callback", passport.authenticate('google', {failureRedirect: '/'}), authGoogle.callback);

app.get("/home", homeGet);

app.get('/logout', (req, res) => {
    let sessionId = getCookie(req, "sessionId");
    if(sessionId) {
        deleteCookie(res, "sessionId");
        console.log(getCookie(req, "sessionId"))
        const connection = database.open();
        connection.connect(function(e) {
            if(e) {throw new Error(e)};
            connection.query(`DELETE FROM sessions WHERE sessionId = '${sessionId}'`, (err, row) => {
                console.log(`${sessionId} deletado no log-out!`);
                return res.redirect(`/`);
            });
        });
    } else {
        console.log("Não tem nenhum cookie de session!");
        return res.redirect('/');
    };
});

app.get("/admin", adminGet);

app.post("/admin", adminPost);

app.post("/admin-add", adminAdd);

app.post("/admin-remove", adminRemove);

app.get("/sessions", (req, res) => {
    const connection = database.open();
    connection.connect(function(e) {
        if(e) {throw new Error(e)};
        let query = `SELECT * FROM sessions;`;
        connection.query(query, (err, rows) => {
            database.close(connection);
            return res.json(rows);
        });
    });
});

app.post("/get-icon", getIcon);

app.post("/remove-icon", removeIcon);

app.post("/update-icon", updateIcon);

app.listen(process.env.PORT || port, () => {
    console.log(`Servidor iniciado na porta ${port}!`);
});