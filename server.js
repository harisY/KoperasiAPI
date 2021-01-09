const express = require('express');
const bodyParser = require('body-parser');
const { default: route } = require('./route');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Panggil route
let routes = require('./route');
routes.app();


app.listen(3000, () => {
    console.log(`Server started on port`);
});

