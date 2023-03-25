/*continue with tut*/
/*https://www.youtube.com/watch?v=2LLfr41Yjgk&list=WL&index=9&t=664s*/
/*https://www.freecodecamp.org/news/a-quick-introduction-to-oauth-using-passport-js-65ea5b621a/*/

const express = require("express");
//const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");

dotenv.config({ path: "./config/config.env" });
require("./config/passport")(passport);

const User = require("./models/User");

//const middlewares = require("./middleware/auth");

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
    secure: true,
    domain: "https://spinwheelmaker2.netlify.app",
    sameSite: "none",
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport");

function isUserAuthenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send("You must login!");
  }
}

//Routes
app.use("/api/v1/spinwheel", require("./routes/spinwheel"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/user", require("./routes/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🤖 Server is live on port ${PORT}`));
