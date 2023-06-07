const { default: axios } = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const id = req.params.id;
    const {data} = await axios(URL + id);
    
      
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
      };

      character.name ? res.status(200).json(character) : res.status(200).send("Not Found");
      
    }
    catch (error)  {
   
      res.status(500).send(error.message);
    };
  
};

module.exports = { getCharById };
