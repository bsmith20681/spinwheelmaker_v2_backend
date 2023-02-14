const express = require("express");
const passport = require("passport");
const router = express.Router();

// passport.authenticate middleware is used here to authenticate the request
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account", // Used to specify the required data
  })
);

// The middleware receives the data from Google and runs the function on Strategy config
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect(process.env.CLIENT_URL);
});

// Logout route
router.get("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send("success");
  }
});

module.exports = router;
