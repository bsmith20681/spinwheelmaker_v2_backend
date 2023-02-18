const mongoose = require("mongoose");

/* /63d82cc2da359ac7e40b384a/0/ */
/* then when you edit it save the number plus one /63d82cc2da359ac7e40b384a/1/ */

const SpinWheelSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  shortID: {
    type: String,
  },
  iteration: {
    type: Number,
    default: 0,
  },
  segments: {
    type: Array,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/*
SpinWheelSchema.pre("save", function (next) {
  if (this.isNew) {
    this.shortID = nanoid(11);
  }
  return next();
});
*/
module.exports = mongoose.model("SpinWheel", SpinWheelSchema);
