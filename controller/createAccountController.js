const Accounts = require("../models/accountSchema");
const bcrypt = require("bcrypt");

const createAcc_createAcc_get = (req, res) => {
  res.render("createAcc", {});
};
// Create a new account and save it to the database
const createAcc_createAcc_post = async (req, res) => {
  const { userName, password } = req.body;
  // Check if username is already in use
  const Account = await Accounts.find({ userName: userName}).exec();
  if(Account == []){
    
  }else{
    console.log('err')
  }
};

module.exports = {
  createAcc_createAcc_get,
  createAcc_createAcc_post,
};
