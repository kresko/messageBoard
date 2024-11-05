const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

const port = 3000;
app.listen(port, () => {
    console.log('server is running on port ' + port);
})