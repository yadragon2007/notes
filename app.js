const express = require("express");
const app = express();
// Cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// handle json
app.use(express.json());
// files
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// .env
require("dotenv").config();
// database
const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
  // connect to the db
  await mongoose.connect(
    `mongodb+srv://${process.env.databaseUserName}:${process.env.databaseUserPassword}@cluster0.bucun0e.mongodb.net/?retryWrites=true&w=majority`
  );
  // listen
  app.listen(process.env.port, () => {
    console.log(`http://localhost:${process.env.port}/`);
  });
}
// routes
const home = require("./routes/home");
const login = require("./routes/login");
const createAcc = require("./routes/createAccount");
const fetchAPI = require("./routes/fetchAPI");

app.use(home);
app.use(login);
app.use(createAcc);
app.use(fetchAPI);

// 404
app.use((req, res) => {
  res.status(404).send("notFound");
});
