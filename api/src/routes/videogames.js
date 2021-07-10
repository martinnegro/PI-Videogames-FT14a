const { Router } = require('express');
const router = Router();
const { Op } = require("sequelize");
const { Videogame } = require('../db');
const axios = require('axios');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const { API_URL_GAMES, API_URL_GENRES,API_URL_PLATFORMS } = require('../../constants');
const { API_KEY } = process.env;

// GET /videogames:
// Obtener un listado de los primeras 15 videojuegos
// Debe devolver solo los datos necesarios para la ruta principal
router.get('/', async (req, res) => {
    const { name } = req.query;
    if (!name) {
        const vgs = await Videogame.findAll({
            attributes: ['id','idRawg','name','rating','imgUrl'],
            include: {association: 'genres'}
        });
        res.json(vgs);
    } else {
        const vgs = await Videogame.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });
        if (vgs.length < 15) {
            let response = await axios.get(`${API_URL_GAMES}${API_KEY}&search=${name}`);
            let result = response.data.results;
            for (let i = 0; i < result.length; i++) {
                let [game, created] = await Videogame.findOrCreate({
                    where: {
                        idRawg: result[i].id
                    },
                    defaults: {
                        id: uuidv4(),                           
                        idRawg: result[i].id,                   
                        name: result[i].name,
                        description: '',
                        released: result[i].released,
                        rating: result[i].rating,
                        imgUrl: result[i].background_image
                    }
                });
                if (created) vgs.push(game);
            };
        }
        res.json(vgs);
    }
});
//  GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
// Si no existe ningún videojuego mostrar un mensaje adecuado

router


module.exports = router;
