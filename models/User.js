const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  picture: { type: String },
  email: { type: String },
  first_name: { type: String },
  last_name: { type: String },
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model("Users", UserSchema);
