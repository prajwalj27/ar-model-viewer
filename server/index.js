const express = require("express");
const app = express();
const path = require("path");

const port = 3001;

// app.use(express.static(__dirname + ))

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:user/:project", (req, res) => {
  const user = req.params["user"];
  const project = req.params["project"];
  // console.log(user, project);
  const filePath = path.join(
    __dirname,
    `/assets/${user}/${project}/${project}.html`
  );
  // res.sendFile(path.resolve(filePath));
  res.sendFile(filePath);
  // res.json(`location: ${filePath}`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
