module.exports = (req, name) => {
    return req.cookies[name];
};  