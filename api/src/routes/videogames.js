const { Router } = require('express');
const router = Router();
const { Op } = require("sequelize");
const { Videogame, Genre, Platform } = require('../db');
const axios = require('axios');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const { API_URL_GAMES, API_URL_GENRES, API_URL_PLATFORMS } = require('../../constants');
const { API_KEY } = process.env;

// GET /videogames:
// Obtener un listado de los primeras 15 videojuegos
// Debe devolver solo los datos necesarios para la ruta principal
router.get('/', async (req, res, next) => {
    const { name } = req.query;
    if (!name) {
        Videogame.findAll(
            {
                attributes: ['id','idRawg','name','rating','imgUrl'],
                include: { 
                    model: Genre,
                    through: { attributes: [] } 
                }
            }
            ).then((vgs) => res.json(vgs))
              .catch((err) => next(err))
    } else {
        // Busca Coincidencias en la DB
    
        const vgs = await Videogame.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: [
                {
                    model: Genre,
                    through: { attributes: [] }
                },
                {
                    model: Platform,
                    through: { attributes: [] }
                },
            ],
            required: false
        });
        // Busca coincidencias en la api.
        // Si el resultado no se encuentra en la DB, crea la instancia
        // y luego la agrega al resultado anterior
        const response = await axios.get(`${API_URL_GAMES}${API_KEY}&search=${name}`);
        const result = response.data.results;
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
            if (created){
                const platformsIds = result[i].platforms.map( p => p.platform.id);
                const genresIds    = result[i].genres.map( p => p.id);
                await game.addGenre(genresIds);
                await game.addPlatform(platformsIds)
                const vg = await Videogame.findByPk(game.id,{
                    include: [
                        {
                            model: Genre,
                            through: { attributes: [] }
                        },
                        {
                            model: Platform,
                            through: { attributes: [] }
                        },
                    ],
                    required: false
                });
                vgs.push(vg);
            }
        }
        res.json(vgs);
    }
});


module.exports = router;
