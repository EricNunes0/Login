const database = require("../database");
const getCookie = require("../cookies/getCookie");

module.exports = (req, res, next) => {
    let sessionId = getCookie(req, "sessionId");
    if(sessionId) {
        const connection = database.open();
        connection.connect(function(e) {
            if(e) {throw new Error(e)};
            let sessionQuery = `SELECT * FROM sessions WHERE sessionId = '${sessionId}' LIMIT 1;`;
            connection.query(sessionQuery, (err, rows) => {
                if(rows.length > 0) {
                    const userRow = rows[0];
                    let userSearchQuery = `SELECT * FROM registers WHERE userId = '${userRow.userId}' LIMIT 1;`;
                    connection.query(userSearchQuery, (err, rows) => {
                        if(rows.length > 0) {
                            const foundUser = rows[0];
                            if(foundUser.admin == 0) {
                                return res.status(401).redirect("/home");
                            };
                            let registersQuery = `SELECT * FROM registers;`;
                            connection.query(registersQuery, (err, rows) => {
                                if(err) {throw new Error(err)};
                                database.close(connection);
                                res.render("admin", {
                                    user: {
                                        userId: foundUser.userId
                                    },
                                    registers: rows
                                });
                            });
                        };
                    });
                };
            });
        });
    } else {
        return res.status(401).redirect("/");
    };
};