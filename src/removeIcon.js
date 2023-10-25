const database = require("./database");

module.exports = (req, res, next) => {
    const userId = req.body.userId;
    console.log(userId);
    if(userId) {
        const connection = database.open();
        connection.connect(function(e) {
            if(e) {throw new Error(e)};
            let query = `UPDATE registers SET icon = ? WHERE userId = ?;`;
            connection.query(query, [null, userId], (err, rows) => {
                database.close(connection);
                return res.status(200).json({
                    message: "Foto de perfil removida com sucesso!"
                });
            });
        });
    } else {
        return res.json({
            error: "Houve um erro ao remover sua foto de perfil"
        });
    };
}