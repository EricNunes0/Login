const database = require("../database");

module.exports = (req, res, next) => {
    const userId = req.body.userId;
    const ids = req.body.ids;
    if(userId) {
        const connection = database.open();
        connection.connect(function(e) {
            let addAdminQuery = `UPDATE registers SET admin = ${0} WHERE userId IN (${`'${ids.join("\',")}'`});`;
            connection.query(addAdminQuery, (err, row) => {
                if(err) {throw new Error(err)};
                database.close(connection);
                return res.status(200).json({
                    message: `${ids.length} ${ids.length === 1 ? "administrador removido" : "administradores removidos"}!`
                })
            });
        });
    } else {
        return res.status(401).json({
            error: `Nenhum administrador removido!`
        })
    };
};