const express = require("express");
const app = express();
const port = 3000;
const db = require("./queries");

// app.get("/", (req, res) => {
//   res.send("Welcome to my eCommerce site!");
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get("/", db.getBooks);
