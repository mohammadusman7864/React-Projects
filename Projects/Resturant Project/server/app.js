const express = require("express");
require("color");
const  dotenv = require('dotenv')
const connectDB = require('./config/Config')
const morgan = require("morgan")
 
const app = express();

// dotenv config
dotenv.config();

// mongoDB Connction
connectDB("mongodb://localhost:27017/pizza-shop");

// middleware
app.use(express.json());
app.use(morgan('dev'));

// route
app.get("/",(req,res)=> {
    res.send("hello usman")
});
  

const port = process.env.PORT || 4500
app.listen(port,()  => {

});
