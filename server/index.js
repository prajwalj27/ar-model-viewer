const express = require("express");
const app = express();
const path = require("path");

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/ar-model-viewer", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
