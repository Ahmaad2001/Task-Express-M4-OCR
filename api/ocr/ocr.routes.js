const express = require("express");
const router = express.Router();
const { ocrCreate } = require("./ocr.controllers");
const uploader = require("../../middlewares/uploader");

router.param("ocrId", async (req, res, next, ocrId) => {
  try {
    const foundOcr = await fetchOcr(ocrId);
    if (!foundOcr) return next({ status: 404, message: "Ocr not found" });
    req.ocr = foundOcr;
    return next();
  } catch (err) {
    return next(err);
  }
});

router.post("/", uploader.single("image"), ocrCreate);

module.exports = router;
