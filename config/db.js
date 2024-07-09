const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB with URI:", process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
