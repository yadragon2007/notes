const Accounts = require("../models/accountSchema")

const getUser_post = async (req,res) => {
  const {userId} = req.body
  const account = await Accounts.findById(userId)
  res.json(account)
}

module.exports = {
  getUser_post,
}