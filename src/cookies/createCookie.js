module.exports = (res, name, value) => {
    res.cookie(name, value, {
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });
};