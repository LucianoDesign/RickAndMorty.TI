let myFavorites = [];

const postFav = (req, res) =>{
    const character = req.body;
    myFavorites.push(character);
    res.status(200).json(myFavorites);
    
};

const deleteFav = (req, res) =>{
    const id = Number(req.params.id);
    myFavorites = myFavorites.filter(char => char.id !== id);
    res.status(200).json(myFavorites);
    console.log(id)
}

module.exports = {postFav, deleteFav};