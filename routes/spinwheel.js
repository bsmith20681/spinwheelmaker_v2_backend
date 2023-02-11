const express = require("express");
const { getSpinWheels, getSpinWheel, createSpinWheel } = require("../controllers/spinwheel");
const router = express.Router();

router.get("/", getSpinWheels);
//router.get("/:id", getSpinWheel);
router.get("/:shortID/:iteration", getSpinWheel);
router.post("/", createSpinWheel);

module.exports = router;
