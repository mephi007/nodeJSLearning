const express = require("express");
const app = express();
app.use(express.json())

app.get("/", function(req, res){
    res.render('home');
});

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