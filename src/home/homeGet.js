const database = require("../database");
const getCookie = require("../cookies/getCookie");

module.exports = (req, res, next) => {
    let sessionId = getCookie(req, "sessionId");
    if(sessionId) {
        const connection = database.open();
        connection.connect(function(e) {
            if(e) {throw new Error(e)};
            let query = `SELECT * FROM sessions WHERE sessionId = '${sessionId}' LIMIT 1;`;
            connection.query(query, (err, rows) => {
                console.log(rows);
                if(rows) {
                    if(rows.length > 0) {
                        const userRow = rows[0];
                        let userSearchQuery = `SELECT * FROM registers WHERE userId = '${userRow.userId}' LIMIT 1;`;
                        connection.query(userSearchQuery, (err, rows) => {
                            if(rows.length > 0) {
                                const foundUser = rows[0];
                                database.close(connection);
                                const userInfos = {
                                    userId: foundUser.userId,
                                    firstName: foundUser.firstName,
                                    lastName: foundUser.lastName,
                                    date: foundUser.date,
                                    gender: foundUser.gender,
                                    email: foundUser.email,
                                    phone: foundUser.phone,
                                    icon: foundUser.icon
                                }
                                return res.render("home", {user: userInfos});
                            } else {
                                /* Deletando sessão caso o userId não seja encontrado */
                                connection.query(`DELETE FROM sessions WHERE userId = '${userRow.userId}'`, (err, row) => {
                                    console.log(`Nenhum userID igual a ${sessionId}`);
                                    return res.redirect(`/`);
                                });
                                database.close(connection);
                            }
                        });
                    } else {
                        /* Nenhum sessionId encontrado */
                        database.close(connection);
                        console.log(`Nenhum sessionId igual a ${sessionId}`);
                        deleteCookie(res, "sessionId");
                        return res.redirect(`/`);
                    };
                } else {
                    console.log(`Nenhum row encontrado em: /home`);
                    return res.redirect("/");
                };
            })
        });
    } else {
        return res.redirect('/');
    };
};