const express = require("express");
const router = express.Router();
const { ocrCreate } = require("./ocr.controllers");
const uploader = require("../../middlewares/uploader");

router.post("/", uploader.single("image"), ocrCreate);

module.exports = router;
