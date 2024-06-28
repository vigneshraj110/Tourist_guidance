const express = require("express");
const cors = require("cors");
const errorController = require("./controllers/errorController");
const AppError = require("./utils/AppError");
const Categories = require("./Model/Categories");
const Tour = require("./Model/Tour.js");
const app = express();
app.use(cors());
app.options("*", cors());
app.get("/api/v1/tours", async (req, res) => {
  const tours = await Tour.find({});
  res.status(200).json(tours.splice(0, 9));
});
app.get("/api/v1/categories", async (req, res) => {
  const datas = await Categories.find({});
  res.status(200).json(datas);
});

app.get("/api/v1/locations/:name", async (req, res) => {
  var { name } = req.params;
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const tours = await Tour.find({ Location: { $regex: `.*${name}.*` } });
  res.status(200).json(tours);
});
app.get("/api/v1/place/:id", async (req, res) => {
  const { id } = req.params;
  const tour = await Tour.findById(id);
  res.status(200).json(tour);
});
app.get("/api/v1/category/:category", async (req, res) => {
  const { category } = req.params;
  const tours = await Tour.find({ Category: category });
  res.status(200).json(tours);
});
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorController);
module.exports = app;
