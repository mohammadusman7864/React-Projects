const mogoose = require("mogoose");
const dotenv = require("dotenv");
require("color");
const connectDB = require("./config/Config");
const pizzaData = require("./data/pizzas-data");
const pizzaModel = require("./models/pizzaModel");

// config env and mongodb connect file
connectDB();
dotenv.config();

// import data
const importData = async () => {
  try {
    await pizzaModel.deleteMany();
    const sampleData = pizzaData.map((a) => {
      return { ...a };
    });
    await pizzaData.insertMany(sampleData);
    console.log("Data Imported".bgRed.white);
    process.exit();
  } catch (error) {
    console.log("$(error)".bgRed.white);
    process.exit(1);
  }
};

// const dataDestroy = () => {};
// if (process.argv[2] === "-d") {
//   dataDestroy();
// } else {
//   importData();
// }
