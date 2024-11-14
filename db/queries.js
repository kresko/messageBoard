const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");

    return rows;
}

async function getMessageById(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [id]);

    return rows;
}

async function postNewMessage(message, username) {
    await pool.query("INSERT INTO messages(message, username, date) VALUES ($1, $2, CURRENT_DATE)", [message, username]);
}

module.exports = {
    getAllMessages,
    getMessageById,
    postNewMessage,
}