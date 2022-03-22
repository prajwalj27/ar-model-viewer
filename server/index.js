const express = require("express");
const app = express();
const path = require("path");

const port = 3001;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:user/:project/:format", (req, res) => {
  const user = req.params["user"];
  const project = req.params["project"];
  const format = req.params["format"];

  const filePath = `${user}/${project}/scene.${format}`;
  console.log(filePath);

  // const filePath = path.join(
  //   __dirname,
  //   `/assets/${user}/${project}/${project}.html`
  // );

  // const filePath2 = path.join(__dirname, `/views/index.html`);
  // res.sendFile(filePath2);
  res.render("index", { filePath: filePath });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
