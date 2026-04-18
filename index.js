const express = require("express");
const app = express();
// trigger pipeline
// trigger again
app.get("/", (req, res) => {
  res.send("User Service Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});