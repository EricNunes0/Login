const database = require("../database");
const { validationResult, matchedData } = require("express-validator");
const createCookie = require("../cookies/createCookie");
const createSession = require("../sessions/createSession");
const { v4: uuidv4 } = require("uuid");

exports.loginController = (req, res, next) => {
    const body = req.body;
    const email = body.email;
    const password = body.password;
    console.log(password)

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

    const connection = database.open();
    connection.connect(function(e) {
        let query = `SELECT * FROM registers WHERE email = '${email}' LIMIT 1;`;
        connection.query(query, (err, row) => {
            if(row.length == 0) {
                database.close(connection);
                let signupButton = "<button type = 'button' class = 'open-form-buttons' id = 'open-form-signup' onclick = 'openForms(); callSignupForm();'>Crie uma nova conta</button>";
                return res.render("index", {error: {
                    type: "\"EmailNotFound\"",
                    message: `\"O e-mail que você inseriu não está cadastrado! ${signupButton}\"`
                }});
            } else {
                row = row[0];
                if(password !== row.password) {
                    database.close(connection);
                    return res.render("index", {error: {
                        type:"\"InvalidPassword\"",
                        message: "\"A senha inserida está incorreta! <a class = 'sign-warning-links' href = '/'>Esqueceu a senha?</a>\""
                    }});
                } else {
                    const userId = row.userId;
                    const sessionId = createSession(connection, userId);
                    createCookie(res, "sessionId", sessionId);
                    database.close(connection);
                    return res.redirect("../home");
                };
            };
        });
    });
};