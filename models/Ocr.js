const { model, Schema } = require("mongoose");

const OcrSchema = new Schema({
  title: String,
  body: String,
  image: String,
});

module.exports = model("Ocr", OcrSchema);
