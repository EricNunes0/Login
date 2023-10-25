const database = require("./database");
const formidable = require("formidable");
const fs = require("fs");

module.exports = (req, res, next) => {
    let mb = 2;
    let maxSize = 1024 * 1024 * mb;
    let form = new formidable.IncomingForm({
        maxFiles: 1,
        maxFileSize: maxSize
    });
    form.parse(req, function(error, fields, file) {
        if(error) {
            res.status(500).json({
                error: "As imagens não podem ultrapassar 2MB!"
            });
            throw new Error(error);
        };
        const userId = fields.userId[0];
        const icon = file.icon[0];
        if(userId && icon) {
            console.log(icon.mimetype);
            if(icon.mimetype === "image/png" || icon.mimetype === "image/jpg" || icon.mimetype === "image/jpeg") {
                let blob = fs.readFileSync(icon.filepath);
                const connection = database.open();
                connection.connect(function(e) {
                    if(e) {throw new Error(e)};
                    let query = `UPDATE registers SET icon = ? WHERE userId = ?;`;
                    connection.query(query, [blob, userId], (err, rows) => {
                        database.close(connection);
                        return res.status(200).json({
                            message: "Foto de perfil alterada com sucesso!"
                        });
                    });
                });
            } else {
                return res.json({
                    error: "Apenas imagens PNG, JPG e JPEG são aceitas"
                });
            };
        };
    })
}