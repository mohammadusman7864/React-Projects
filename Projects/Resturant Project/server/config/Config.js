const mongoose = require('mongoose');
require('color')

const connectDB= async() => {
    try {

          const url = process.env.MONGO_URI
          const conn=    await mongoose.connect(url,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
          });
          console.log(
            'Mongo Database Connected! ${.con.connection.host}' .bgCyan.white );
         
      } catch (error) {
        console.log('error: ${error.message}' .bgRed.white  );
      }
}
module.exports = connectDB