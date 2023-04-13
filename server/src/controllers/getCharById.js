const { rejects } = require("assert");
const axios = require("axios");
let http = require("http");

const getCharById = (res, id) => {
  return new Promise(()=>{
    let character = {};
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data) => {
        character = {
          id: id,
          name: data.data.name,
          gender: data.data.gender,
          species: data.data.species,
          origin: data.data.origin.name,
          image: data.data.image,
          status: data.data.status,
        }
        res.writeHead(200, {
          "content-type": "application/json",
        });
        res.end(JSON.stringify(character));
        
  
      })
      .catch((error) => {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end( error.message);
      });

  })
 
};

module.exports = {
  getCharById,
};
