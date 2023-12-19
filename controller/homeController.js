const Accounts = require("../models/accountSchema");

const home_index_get = async (req, res) => {
  const { userData } = req.cookies;
  if (userData) {
    const { _id } = userData;
    const account = await Accounts.findById(_id);
    if (account) {
      res.cookie("userData", account, {
        secure: true,
        maxAge: 999999999999999,
      });
      res.render("index", {
        user: account,
        notes: account.notes,
      });
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
};
const addNote_index_post = async (req, res) => {
  const noteData = req.body;
  const { _id } = req.cookies.userData;

  const account = await Accounts.findById(_id);
  let notes = account.notes;
  notes.push(noteData);
  await Accounts.findByIdAndUpdate(_id, { notes: notes });
  res.redirect("/");
};

const updateNote_index_post = async (req, res) => {
  const { _id } = req.cookies.userData;
  const { noteIndex } = req.params;
  const note = req.body;

  const account = await Accounts.findById(_id);
  account.notes[noteIndex] = note;
  await Accounts.findByIdAndUpdate(_id, { notes: account.notes });
  res.redirect("/");
};

const deleteNote_index_delete = async (req, res) => {
  const { noteIndex } = req.body;
  const { _id } = req.cookies.userData;
  const account = await Accounts.findById(_id);
  account.notes.splice(noteIndex, 1);
  await Accounts.findByIdAndUpdate(_id, { notes: account.notes });
  const userData = await Accounts.findById(_id);
  res.json({ status: "Deleted" });
};

module.exports = {
  home_index_get,
  addNote_index_post,
  updateNote_index_post,
  deleteNote_index_delete,
};
