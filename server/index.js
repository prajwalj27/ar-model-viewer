const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");

// import { userProjectData } from "./data";

const port = 3001;
const { createUserDirectory } = require("./generateUser");
// const jsonParser = bodyParser.json()

app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  // console.log(userProjectData[userProjectData.length - 1].id);
  res.json({ hello: "world" });
  // res.render("users/prajwal/car/index.ejs");
});


app.get("/:user/:project/:format", (req, res) => {
  const user = req.params["user"];
  const project = req.params["project"];
  const format = req.params["format"];

  const filePath = `${user}/${project}/scene.${format}`;
  // console.log(filePath);

  res.render(`users/${user}/${project}/index`, {
    filePath: filePath,
    user: user,
    project: project,
  });
});

app.post("/createUserProject", (req, res) => {
  console.log(req.body);
  const user = req.body.user;
  const project = req.body.project;
  const format = req.body.format;

  createUserDirectory(user, project, format);

  res.json({ user: user, project: project, format: format });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
