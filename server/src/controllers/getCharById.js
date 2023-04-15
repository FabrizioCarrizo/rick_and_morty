const axios = require("axios");
let http = require("http");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const {id}= req.params;
  return new Promise(() => {
    let character = {};
    axios
      .get(`${URL}${id}`)
      .then((data) => {
        // character = {
        //   id: req.query.id,
        //   name: data.data.name,
        //   gender: data.data.gender,
        //   species: data.data.species,
        //   origin: data.data.origin.name,
        //   image: data.data.image,
        //   status: data.data.status,
        // }
        res
          .status(200)
          .send({
            id: req.query.id,
            name: data.data.name,
            gender: data.data.gender,
            species: data.data.species,
            origin: data.data.origin.name,
            image: data.data.image,
            status: data.data.status,
          });
        res.end(JSON.stringify(character));
      })
      .catch((error) => {
        res.status(404).send("Not found");
      });
  });
};

module.exports = {
  getCharById,
};
