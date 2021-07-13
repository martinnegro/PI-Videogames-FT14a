const { Router } = require('express');
const router = Router();

const axios = require('axios');

require('dotenv').config();
const { API_URL_ID } = require('../../constants');
const { API_KEY } = process.env;

const { Videogame, Genre, Platform } = require('../db');
const { v4: uuidv4 } = require('uuid');



//  GET /videogame/{idVideogame}:
// Obtener el detalle de un videojuego en particular
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego
// Incluir los géneros asociados
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const vg = await Videogame.findByPk(id,{
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
        if (vg.idRawg && vg.description.length < 1) {
            console.log('ENTRÓ A BUSCAR LA DESCRIPTION')
            axios.get(`${API_URL_ID}${vg.idRawg}?key=${API_KEY}`)
                .then( async (response) => {
                    vg.description = response.data.description;
                    await vg.save();
                    res.json(vg);
                }).catch(err => next(err))
        } else res.json(vg);
    } catch (err) {
        next(err)
    }
});


// POST /videogame:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos
router.post('/', async (req, res) => {  
    const { name, description, released, rating, imgUrl, genres } = req.body;
    console.log(req.body);
    const vg = await Videogame.create({
        id: uuidv4(),                           
        name,
        description,
        released: released || null,
        rating: rating || null,
        imgUrl: imgUrl || null,
    })
    await vg.addGenre(genres);
    res.json(vg);
});

module.exports = router;