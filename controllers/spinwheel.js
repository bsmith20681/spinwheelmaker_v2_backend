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

// @desc      Get all SpinWheels
// @route     GET /api/v1/spinwheel
// @access    Public
exports.getAllUserCreatedSpinWheel = async (req, res) => {
  try {
    const spinWheels = await SpinWheel.find({ user: req.user._id }).sort({ date: -1 });
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
    let spinWheel = await SpinWheel.find({ shortID: req.params.shortID });
    res.status(200).json({ success: true, data: spinWheel });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// @desc      update a single SpinWheels
// @route     PUT /api/v1/spinwheel
// @access    Public
exports.updateSpinWheel = async (req, res) => {
  try {
    let spinWheel = await SpinWheel.findOne({ shortID: req.params.shortID });

    spinWheel.iteration.push(req.body.iteration);

    await spinWheel.save();

    res.status(200).json({ success: true, data: spinWheel });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// @desc      Publish a SpinWheel
// @route     POST /api/v1/spinwheel
// @access    Public
exports.createSpinWheel = async (req, res) => {
  console.log(req.body);
  try {
    const spinWheel = await SpinWheel.create(req.body);
    res.status(201).json({
      success: true,
      data: spinWheel,
    });
    console.log(spinWheel);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
