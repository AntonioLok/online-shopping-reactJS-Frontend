const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true, dropDups: true } },
  password: { type: String, required: true },
});

userSchema.methods.generateHash = password => (
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null));

userSchema.statics.getEmail = (userEmail, callback) => {
  userModel.find({ username: userEmail }, (err, email) => {
    if (err) {
      return callback(err);
    }
    return callback(null, email);
  });
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
