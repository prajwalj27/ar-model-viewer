const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;


const databaseModels = require("./database");
const user = databaseModels.User;
const project = databaseModels.Project;
const model = databaseModels.Model;

app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.json({ hello: "FabricateAR" });
});


// Users
app.get("/users/getAll", async (req, res) => {
  let usersData = await user.find();
  res.send(usersData);
});

app.post("/users/create", async (req, res) => {
  console.log(req.body);
  const newUser = await user(req.body);
  const result = newUser.save();
  console.log("[User Added]");
  res.send(result);
});

app.delete("/users/deleteUser/:id", async (req, res) => {
  let delete_data = await user.deleteOne({ _id: req.params.id  });
  console.log("[User Deleted]");
  res.send(delete_data);
});



//projects
app.get("/projects/getAll", async (req, res) => {
  let projectsData = await project.find();
  res.send(projectsData);
});

app.post("/projects/create", async (req, res) => {
  console.log(req.body);
  const newProject = await project(req.body);
  const result = newProject.save();
  console.log("[Project Added]");
  res.send(result);
});

app.delete("/projects/deleteProject/:id", async (req, res) => {
  let delete_data = await project.deleteOne({ _id: req.params.id  });
  console.log("[Project Deleted]");
  res.send(delete_data);
});




// models 
app.get("/models/getAll", async (req, res) => {
  let modelsData = await model.find();
  res.send(modelsData);
});

app.delete("/models/deleteModel/:id", async (req, res) => {
  let delete_data = await model.deleteOne({ _id: req.params.id  });
  console.log("[Model Deleted]");
  res.send(delete_data);
});



// Delete data endpoint
// app.delete("/delete/:id", async (req, res) => {
//   let delete_data = await product.deleteOne({ _id: req.params.id  });
//   console.log("[Data Deleted]");
//   res.send(delete_data);
// });



app.get("/publishProject/:user/:project/:format", (req, res) => {
  const user = req.params["user"];
  const project = req.params["project"];
  const format = req.params["format"];

  const filePath = `${user}/${project}/scene.${format}`;

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
