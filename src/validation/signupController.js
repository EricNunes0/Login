const database = require("../database");
const { validationResult, matchedData } = require("express-validator");
const createCookie = require("../cookies/createCookie");
const createSession = require("../sessions/createSession");
const { v4: uuidv4 } = require("uuid");

exports.signupController = (req, res, next) => {
    const body = req.body;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const date = body.date;
    const gender = body.gender;
    const email = body.email;
    const phone = body.phone;
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
                type: `\"signupValidation\"`,
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
            if(row.length != 0) {
                database.close(connection);
                let loginButton = "<button type = 'button' class = 'open-form-buttons' id = 'open-form-login' onclick = 'openForms(); callLoginForm();'>Faça o login</button>";
                return res.render("index", {error: {
                    type: "\"EmailExists\"",
                    message: `\"O e-mail que você inseriu já está cadastrado! ${loginButton}\"`
                }});
            } else {
                const userId = uuidv4();
                connection.query(`
                    INSERT INTO registers (userId, firstName, lastName, date, gender, email, phone, password, admin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [userId, firstName, lastName, date, gender, email, phone, password, false]
                );
                const sessionId = createSession(connection, userId);
                createCookie(res, "sessionId", sessionId);
                database.close(connection);
                return res.redirect("../home");
            };
        });
    });
};