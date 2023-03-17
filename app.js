const express = require('express');
const Routes = require('./routes/routes.js');

const path = require('path');
const port = process.env.PORT || 3005;
const hbs = require('hbs');
const app = express();

//  static things path 
app.use('/static', express.static('public'));

app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials('views/partials');

app.use('/', Routes);

app.listen(port, function () {
    console.log("server started at 3005");
});