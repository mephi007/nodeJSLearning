const express = require("express");
let app = new express();

app.get("/", function(req, res){
    res.send("hello from sample");
});

app.listen(3000, function(){
    console.log("server started at 3000");
});