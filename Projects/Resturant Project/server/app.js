const express = require("express");
require("color");
const morgan = require("morgan")
 
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

// route
app.get("/",(req,res)=> {
    res.send("hello usman")
});
app.listen(4500);