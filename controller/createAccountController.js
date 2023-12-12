const Accounts = require("../models/accountSchema");
const bcrypt = require("bcrypt");

const createAcc_createAcc_get = (req, res) => {
  res.render("createAcc", {});
};
// Create a new account and save it to the database
const createAcc_createAcc_post = async (req, res) => {
  const { userName, password } = req.body;
  // Check if username is already in use
  const Account = await Accounts.find({ userName: userName }).exec();
  console.log(Account)
  if (Account.length == 0) {
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // data that will send to data base
    const userDataInputs = {
      userName,
      password: hashedPassword,
      notes: [],
    };
    const account = new Accounts(userDataInputs);
    // save data on data base
    await account.save();
    // get user Data from data base
    const userData = await Accounts.findOne({ userName: userName });
    // add cookies
    res.cookie("userData", userData, {
      secure: true,
      maxAge: 999999999999999,
    });
    // redirect
    res.redirect('/')
  } else {
    console.log("err");
  }
};

module.exports = {
  createAcc_createAcc_get,
  createAcc_createAcc_post,
};
