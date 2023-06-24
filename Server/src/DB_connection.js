require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST} = process.env;



const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');

const database = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);


UserModel(database);
FavoriteModel(database);


const { User, Favorite } = database.models;
User.belongsToMany(Favorite, {through: 'user_favorite'});
Favorite.belongsToMany(User, {through: 'user_favorite'});



module.exports = { conn: database,
   User,
   Favorite}
    

