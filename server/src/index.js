let http = require("http");
let fs = require("fs");
let data = require("./utils/data");
const url = require("url");
const querystring = require("querystring");
const PORT = 3001;

http
  .createServer((req, res) => {
    let character;
    res.setHeader("access-control-allow-origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const regexNum = /\d+/;
      let id = parseInt(req.url.match(regexNum)[0]);

      data.find((ch) => {
        if (ch.id === id) {
          character = ch;
          return;
        }
      });
      res.write(JSON.stringify(character));
      res.end();
    }
  })
  .listen(PORT, "localhost");
