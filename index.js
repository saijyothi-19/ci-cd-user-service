const express = require("express");
const app = express();
// trigger pipeline
// trigger again and
app.get("/", (req, res) => {
  res.send("Version 2");
});
app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});