const db = require("../db/queries");

async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render('index', { messages: messages });
}

async function getMessageById(req, res) {
    const messageId = req.params.id;
    const message = await db.getMessageById(messageId);

    if (message) {
        res.render('messageDetails', { message });
    } else {
        res.status(404).render('Message not found!');
    }
}

async function renderNewMessageForm(req, res) {
    res.render('form');
}

async function postNewMessage(req, res) {
    await db.postNewMessage(req.body.authorMessage, req.body.authorName);
    res.redirect('/');
}

async function deleteAllMessages(req, res) {
    await db.deleteAllMessages();
    res.redirect('/');
}

module.exports = {
    getAllMessages,
    getMessageById,
    renderNewMessageForm,
    postNewMessage,
    deleteAllMessages,
}