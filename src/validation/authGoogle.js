const database = require("../database");
const createCookie = require("../cookies/createCookie");
const createSession = require("../sessions/createSession");

module.exports.callback = (req, res, next) => {
    const email = req.user.email;
    console.log(email); 

    const connection = database.open();
    connection.connect(function(e) {
        let query = `SELECT * FROM registers WHERE email = '${email}' LIMIT 1;`;
        connection.query(query, (err, row) => {
            console.log(query, email, row);
            if(row) {
                if(row.length == 0) {
                    database.close(connection);
                    return res.redirect("/");
                } else {
                    row = row[0];
                    const userId = row.userId;
                    const sessionId = createSession(connection, userId);
                    createCookie(res, "sessionId", sessionId);
                    database.close(connection);
                    return res.redirect("/home");
                };
            } else {
                database.close(connection);
                return res.redirect("/");
            };
        });
    });
};