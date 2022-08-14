const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("color");
const connectDB = require("./config/Config");
const pizzaModel = require("./models/pizzaModel");
const pizzaData = require("./data/pizzas-data");


// config env and mongodb connect file
connectDB("mongodb://localhost:27017/pizza-shop");
dotenv.config();

// import data
const importData = async () => {
  try {
    await pizzaModel.deleteMany();
    const sampleData = pizzaData.map(pizza => {
      return { ...pizza };
    });
    await pizzaData.insertMany(sampleData);
    console.log("Data Imported".bgGreen.white);
    process.exit();
  } catch (error) {
    console.log('$(error)'.bgRed.white);
    process.exit(1);
  }
};

const dataDestroy = () => {}
if (process.argv[2] === '-d') {
  dataDestroy();
} else {
  importData();
}
