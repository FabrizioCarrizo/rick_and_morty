let http = require("http");
let getCharById = require("./controllers/getCharById").getCharById;
let fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const PORT = 3001;

http
  .createServer((req, res) => {
    const regexNum = /\d+/;
    let id = parseInt(req.url.match(regexNum)[0]);
    res.setHeader("access-control-allow-origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      getCharById(res, id);
    }
  })
  .listen(PORT, "localhost");
