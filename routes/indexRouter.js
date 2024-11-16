const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');
const {renderNewMessageForm, postNewMessage, deleteAllMessages} = require("../controllers/indexController");

indexRouter.get('/', indexController.getAllMessages);
indexRouter.get('/message/:id', indexController.getMessageById);
indexRouter.get('/new', renderNewMessageForm);
indexRouter.post('/new', postNewMessage);
indexRouter.get('/delete', deleteAllMessages);

module.exports = indexRouter;