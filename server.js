const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./route');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Panggil route
routes(app);

app.listen(3000, () => {
  console.log(`Server started on port`);
});
