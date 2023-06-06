const express = require("express");
const router = express.Router();

// Importar controladores
const { getCharById } = require("../controllers/getCharById");
const  {login}  = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

// Rutas
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;