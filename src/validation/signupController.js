const database = require("../database");
const { validationResult, matchedData } = require("express-validator");

exports.signupController = (req, res, next) => {
    const body = req.body;
    console.log(body)
    const firstName = body.firstName;
    const lastName = body.lastName;
    const date = body.date;
    const gender = body.gender;
    const email = body.email;
    const phone = body.phone;
    const password = body.password;
    let db = database.open();

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
        console.log("Tá aprovado!");
    }

    let query = `SELECT * FROM registers WHERE email = '${email}'`;
    db.get(query, (err, row) => {
        if(row) {
            console.log("Atenção");
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
};