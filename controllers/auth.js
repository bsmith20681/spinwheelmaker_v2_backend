const passport = require("passport");

// @desc      Get all SpinWheels
// @route     GET /api/v1/spinwheel
// @access    Public
(exports.authenticateGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
  prompt: "select_account", // Used to specify the required data
})(
  // @desc      Get all SpinWheels
  // @route     GET /api/v1/spinwheel
  // @access    Public
  (exports.authenticateGoogleRedirect = passport.authenticate("google"))
)),
  (req, res) => {
    res.send("<script>window.close()</script>");
  };

exports.googleLogout = (req, res) => {
  req.logout();
  res.redirect("/");
};

/*

// @desc      Get all SpinWheels
// @route     GET /api/v1/spinwheel
// @access    Public
exports.authenticateGoogle = () => {
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account", // Used to specify the required data
  });
};

// @desc      Get all SpinWheels
// @route     GET /api/v1/spinwheel
// @access    Public
exports.authenticateGoogleRedirect = () => {
  passport.authenticate("google"),
    (req, res) => {
      res.send("<script>window.close()</script>");
    };
};

exports.googleLogout = (req, res) => {
  req.logout();
  res.redirect("/");
};


*/
