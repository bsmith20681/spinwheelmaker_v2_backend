const mongoose = require("mongoose");

/* /63d82cc2da359ac7e40b384a/0/ */
/* then when you edit it save the number plus one /63d82cc2da359ac7e40b384a/1/ */

const SpinWheelSchema = new mongoose.Schema({
  shortID: {
    type: String,
  },
  settings: {
    type: mongoose.Schema.Types.Mixed,
  },
  iteration: [
    {
      title: {
        type: String,
      },
      segments: [],
    },
  ],

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
