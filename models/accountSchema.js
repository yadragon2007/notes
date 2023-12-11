const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
  userName: String,
  password: String,
  notes:Array,
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;