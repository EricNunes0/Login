const database = require("./database");

module.exports = (req, res, next) => {
    const userId = req.body.userId;
    if(userId) {
        const connection = database.open();
        connection.connect(function(e) {
            if(e) {throw new Error(e)};
            let query = `SELECT * FROM registers WHERE userId = '${userId}' LIMIT 1;`;
            console.log(query);
            connection.query(query, (err, rows) => {
                console.log(rows);
                let row = rows[0];
                database.close(connection);
                return res.status(200).json({
                    icon: row.icon
                });
            });
        });
    };
};