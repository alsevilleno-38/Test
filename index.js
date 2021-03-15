const express =  require("express");
const path = require("path");
const {dirname} = require("path");
const { fileURLToPath } = require('url');

const app = express();
const port = 3030;
let workspaceDir = process.env.pwd;


app.use(express.static(path.join(workspaceDir, "public")));
app.get("/home", (req, res, next) => {
    res.sendFile(path.join(workspaceDir, "page", "home.html"));
})
app.get("/index", (req, res, next) => {
    res.sendFile(path.join(workspaceDir, "page", "index.html"));
})
app.get("/about", (req, res, next) => {
    res.sendFile(path.join(workspaceDir, "page", "about.html"));
})
app.get("/", (req, res, next) => {
    res.sendFile(path.join(workspaceDir, "page", "index.html"));
})
app.post("/about", (req, res, next) => {
    // res.sendFile(path.join(workspaceDir, "page", "index.html"));
})
app.use("/", (req, res, next) => {
    res.sendFile(path.join(workspaceDir, "page", "error", "fileNotFound.html"));
})
app.listen(port);
console.log(`Listening on port ${port}...`);

