const http = require("http");
const express= require('express');
let getCharById = require("./controllers/getCharById").getCharById;
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const server= express();
const PORT = 3001;
const router= require('./routes/index');



server.listen(PORT, ()=>{
    console.log('listening on port ', PORT);
});

server.get('/',(req,res)=>{
    
   let message= res.send('Server is up');
  
    
})






// http
//   .createServer((req, res) => {
//     const regexNum = /\d+/;
//     let id = parseInt(req.url.match(regexNum)[0]);
//     res.setHeader("access-control-allow-origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       getCharById(res, id);
//     }
//   })
//   .listen(PORT, "localhost");

