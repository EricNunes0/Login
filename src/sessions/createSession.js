const { v4: uuidv4 } = require("uuid");

module.exports = (connection, userId) => {
    const expirationTime = 1000 * 60 * 60;
    const sessionId = uuidv4();
    const d = new Date();
    const created = d.getTime();
    const expires = created + expirationTime;
    console.log(created, expires)
    connection.query(`
        INSERT INTO sessions (userId, sessionId, created, expires) VALUES (?, ?, ?, ?)`,
        [userId, sessionId, created, expires]
    );
    return sessionId;
};