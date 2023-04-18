const express = require("express");
var cors = require('cors');

const server = express();
server.use(cors());

server.use(express.json());

const PORT = process.env.PORT || 3001;
const router = require("./routes/index");

server.listen(PORT, () => {
  console.log("listening on port ", PORT);
});

server.get("/", (req, res) => {
  res.send("Server is up");
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use("/rickandmorty", router);
