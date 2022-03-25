const mongoose = require("mongoose");

const connString =
  "mongodb+srv://prajwal:prajwal@cluster0.fcvlr.mongodb.net/FabricateAR?retryWrites=true&w=majority";
mongoose
  .connect(connString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
  User_Id: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Project_Id: {
    type: [Number],
    required: true,
  },
  Model_Id: {
    type: [Number],
    required: true,
  },
  Template_Id: {
    type: [Number],
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  User_Id: {
    type: Number,
    required: true,
  },
  Project_Id: {
    type: Number,
    required: true,
  },
  Model_Id: {
    type: [Number],
    required: true,
  },
  Template_Id: {
    type: [Number],
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
});

const modelSchema = new mongoose.Schema({
  User_Id: {
    type: Number,
    required: true,
  },
  Model_Id: {
    type: Number,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Resource_Url: {
    type: String,
    required: true,
  },
});

const userObject = new mongoose.model("users", userSchema);
const projectObject = new mongoose.model("projects", projectSchema);
const modelObject = new mongoose.model("models", modelSchema);

exports.User = userObject;
exports.Project = projectObject;
exports.Model = modelObject;
