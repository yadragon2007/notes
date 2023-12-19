const Accounts = require("../models/accountSchema");
const bcrypt = require("bcrypt");

const login_login_get = (req, res) => {
  res.render("login", {
    err: "",
  });
};
const login_login_post = async (req, res) => {
  // email & password
  const { userName, password } = req.body;
  // get account data
  const account = await Accounts.findOne({ userName });
  // check if the user name in the database
  if (account) {
    // check if the password is true
    const checkPassword = await bcrypt.compare(password, account.password);
    if (checkPassword == true) {
      // save the data in cookies
      res.cookie("userData", account, {
        secure: true,
        maxAge: 999999999999999,
      });
      res.redirect("/");
    } else {
      res.redirect("/login/err");
    }
  } else {
    res.redirect("/login/err");
  }
};

const loginErr_login_get = (req, res) => {
  res.render("login", {
    err: "user name or password is incorrect. please check your data",
  });
};

const logout_get = (req, res) => {
  res.clearCookie("userData");
  res.redirect("/");
};
module.exports = {
  login_login_get,
  login_login_post,
  loginErr_login_get,
  logout_get,
};
