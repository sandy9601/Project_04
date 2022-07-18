const mongoose = require("mongoose");

const Urlschema = new mongoose.Schema(
  {
    urlCode: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true ,  lowercase: true,},
  },
  { timestamps: true }
);

module.exports = mongoose.model("url", Urlschema);
