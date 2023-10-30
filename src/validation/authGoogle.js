module.exports.validate = (req, res, next) => {
    return res.status(401).json({
        error: true,
        message: "authGoogle: Erro 401"
    });
};