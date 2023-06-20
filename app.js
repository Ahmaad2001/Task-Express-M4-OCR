const express = require("express");
const app = express();
const path = require("path");
const ocrRoutes = require("./api/ocr/ocr.routes");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./database");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

connectDb();
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/ocr", ocrRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
