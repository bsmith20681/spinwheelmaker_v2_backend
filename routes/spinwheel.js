const express = require("express");
const { getSpinWheels, getSpinWheel, updateSpinWheel, createSpinWheel, getAllUserCreatedSpinWheel } = require("../controllers/spinwheel");
const { isUserAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.get("/", getSpinWheels);
router.get("/allusercreated", isUserAuthenticated, getAllUserCreatedSpinWheel);
router.get("/:shortID", getSpinWheel);

router.put("/:shortID", updateSpinWheel);
router.post("/", createSpinWheel);

module.exports = router;
