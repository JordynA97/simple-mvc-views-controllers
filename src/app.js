const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));
app.use(compression());

//set up rest of libraries with express
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);
app.use(favicon(`${__dirname}/../client/img/favicon.png`));

//pass app into router
router(app);

//listen for app, throw error if one is found, write console if no error
app.listen(port, (err) => {
    if(err){
        throw err;
    }

    console.dir(`Listening on port ${port}`);
})