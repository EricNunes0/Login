const database = require("../database");
const { validationResult, matchedData } = require("express-validator");
const createCookie = require("../cookies/createCookie");

exports.loginController = (req, res, next) => {
    const body = req.body;
    let db = database.open();
    const email = body.email;
    const password = body.password;

    /* Validação */
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let errorMap = errors.mapped();
        let inputData = matchedData(req);
        let key = Object.keys(errorMap)[0];
        let errorObj = errorMap[key];
        let errorType = errorObj.type;
        let errorMessage = errorObj.msg;
        return res.status(400).render("index", {
            error: {
                type: `\"loginValidation\"`,
                key: `\"${key}\"`,
                message: `\"${errorMessage}\"`
            }
        });
    } else {
        var inputData = matchedData(req);
    }

    let query = `SELECT * FROM registers WHERE email = '${email}' LIMIT 1`;
    console.log(query)
    db.get(query, (err, row) => {
        console.log("🌐 Este é o resultado:", row);
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
};