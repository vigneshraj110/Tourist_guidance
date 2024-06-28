const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  "Place Name": {
    type: String,
    required: [true, "Provide the Place Name "],
    unique: true,
  },
  Location: { type: String, required: [true, "Provide the Location "] },
  Description: {
    type: String,
    required: [true, "Provide the description "],
    trim: true,
  },
  Image: {
    type: String,
  },
  Category: String,
  Ratings: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1"],
    max: [5, "Rating must be below 5"],
  },
  Latitude: {
    type: String,
  },
  Longitude: {
    type: String,
  },
  "Hotels near the Place": [
    {
      "Hotel Name": { type: String },
      Latitude: { type: String },
      Longitude: { type: String },
      "Distance to Place": { type: String },
    },
  ],
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
