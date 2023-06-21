const Ocr = require("../../models/Ocr");

exports.ocrCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.file.path}`;
    }
    const newOcr = await Ocr.create(req.body);
    res.status(201).json(newOcr);
  } catch (error) {
    return next(error);
  }
};
