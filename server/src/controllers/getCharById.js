const axios = require("axios");

let URL = "https://rickandmortyapi.com/api/character/";
const getCharById = (req, res) => {
  let { id } = req.params;
  return new Promise(() => {
    axios.get(`${URL + id}`).then((response) => {
      let character = ({ id, name, species, image, gender, status } =
        response.data);
        character.image?  
      res.status(200).json(character) : null;

    })
  });
};

module.exports = {
  getCharById,
};
