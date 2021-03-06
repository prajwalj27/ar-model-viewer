const path = require("path");
const fs = require("fs");
// const { v4: uuid } = require("uuid");

const htmlCode = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= user %> - <%= project %></title>

    <script
      type="module"
      src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    ></script>

    <style>
      model-viewer {
        border-radius: 5px;
        border: none;
        margin: 2.25% auto;
        height: 530px;
        width: 1000px;
        background-color: #70bcd1;
      }
      div {
        height: 70vh;
        margin: 0 auto;
        width: 50vw;
        background-color: #70bcd1;
      }

      p, h1 {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1><%= user %> - <%= project %></h1>
    <p>
      https://raw.githubusercontent.com/prajwalj27/ar-model-viewer/main/server/3d-models/<%=
      filePath %>
    </p>
    <model-viewer
      src="https://raw.githubusercontent.com/prajwalj27/ar-model-viewer/main/server/3d-models/<%= filePath %>"
      camera-controls
      auto-rotate
      ar
    ></model-viewer>
  </body>
</html>

`

const dirUsers = path.join(__dirname, "views/users");

if (!fs.existsSync(dirUsers)) {
  fs.mkdirSync(dirUsers, { recursive: true });
}


const createUserDirectory = async (user, project, format) => {

  const dirProjects = path.join(dirUsers, `${user}/${project}`)
  if (!fs.existsSync(dirProjects)) {
    fs.mkdirSync(dirProjects, { recursive: true });
  }

  const userFilePath = path.join(dirProjects, "index.ejs")
  console.log(userFilePath)

  await fs.writeFileSync(userFilePath, htmlCode)
}

module.exports= {
  createUserDirectory
}