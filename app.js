const express = require("express");
const expressLayouts = require('express-ejs-layouts');

const app = express();

//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

//routes
app.use('/', require('./routes/index.js'));

async function startServer() {
    app.listen(4000, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Server running on port 4000!");
    });
}

startServer();