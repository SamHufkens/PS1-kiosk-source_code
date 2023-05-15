const express = require('express');
const mongoose = require('mongoose');
const homeController = require('./controllers/homeController');
const adminController = require('./controllers/adminContoller');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port " + process.env.PORT);
            console.log("Link: http://localhost:" + process.env.PORT);
        });
        console.log("Connected To MongoDB");
    })
    .catch((err) => console.log(err));


app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    if (req.originalUrl && req.originalUrl.split('/').pop() === 'favicon.ico') {
      return res.sendStatus(204);
    }
    return next();
  });

app.use(homeController);

/*app.use(adminController);*/

