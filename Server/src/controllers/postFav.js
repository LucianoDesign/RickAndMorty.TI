const { Favorite }  = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        let { id, name, origin, status, image, species, gender} = req.body;
        console.log(req.body)
        if(!name || !origin || !status || !image || !species || !gender ) {
            return res.status(401).json({ message: 'Faltan datos'});
        }

        await Favorite.findOrCreate({
            where: { id, name ,origin, status, image, species, gender }
          });
      
          const favorites = await Favorite.findAll();
      
          return res.status(200).json(favorites);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {postFav};