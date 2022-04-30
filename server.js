const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my eCommerce site!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
