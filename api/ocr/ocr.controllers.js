exports.ocrCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.file.path}`;
    }
    const newOcr = await Ocr.Create(req.body);
    res.status(201).json(newOcr);
  } catch (error) {
    next(error);
  }
};
