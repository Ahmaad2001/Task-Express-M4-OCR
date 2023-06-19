const express = require("express");
const app = express();
const ocrRoutes = require("./api/ocr/ocr.routes");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./database");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

connectDb();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/ocr", ocrRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
