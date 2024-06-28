const mongoose = require("mongoose");
const Tour = require("../Model/Tour");
const dotenv = require("dotenv");
const data = require("./../data.json");
const Categories = require("../Model/Categories");
dotenv.config({ path: "./../.env" });
console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB Atlas");
});

Tour.insertMany(data, function (error, docs) {
  if (error) {
    console.log(error);
  } else {
    console.log("Data has been inserted into the collection.");
  }
  mongoose.connection.close();
});

// Tour.deleteMany({}, function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("All records have been deleted from the collection.");
//   }
//   mongoose.connection.close();
// });
