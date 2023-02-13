const User = require("../models/User");

// @desc      Get a single SpinWheels
// @route     GET /api/v1/getuser
// @access    Private
exports.getUser = async (req, res) => {
  try {
    let userData = await User.findById(req.user._id);
    console.log(userData);
    res.status(200).json({ success: true, data: userData });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
