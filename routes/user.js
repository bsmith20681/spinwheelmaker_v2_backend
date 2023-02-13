const express = require("express");
const { getUser } = require("../controllers/user");
const router = express.Router();

router.get("/getuser", getUser);

module.exports = router;
