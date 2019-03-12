const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true, dropDups: true } },
  password: { type: String, required: true },
});

userSchema.methods.generatePasswordHash = password => (
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null));

userSchema.statics.getEmail = userEmail => userModel.find({ username: userEmail })
  .exec()
  .then(email => email);

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
