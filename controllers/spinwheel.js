const SpinWheel = require("../models/SpinWheel");

// @desc      Get all SpinWheels
// @route     GET /api/v1/spinwheel
// @access    Public
exports.getSpinWheels = async (req, res) => {
  try {
    const spinWheels = await SpinWheel.find();
    res.status(200).json({ success: true, data: spinWheels });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// @desc      Get a single SpinWheels
// @route     GET /api/v1/spinwheel
// @access    Public
exports.getSpinWheel = async (req, res) => {
  try {
    let spinWheel = await SpinWheel.find({ shortID: req.params.shortID, iteration: req.params.iteration });
    res.status(200).json({ success: true, data: spinWheel });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// @desc      Publish a SpinWheel
// @route     POST /api/v1/spinwheel
// @access    Public
exports.createSpinWheel = async (req, res) => {
  console.log(req);
  try {
    const spinWheel = await SpinWheel.create(req.body);
    res.status(201).json({
      success: true,
      data: spinWheel,
    });
    console.log(spinWheel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
