
const mongoose = require("mongoose");
const dotenv = require("dotenv");


process.on("uncaughtException", (err) => {
  console.log("Uncaught exception 💥 , Shutting down");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config();

const app = require("./app");
const Categories = require("./Model/Categories");

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.log(err));




  

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`App Running on port ${port}....`);
});
