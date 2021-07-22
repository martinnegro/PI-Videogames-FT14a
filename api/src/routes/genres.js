const { Router } = require('express');
const router = Router();
const { Genre } = require('../db');

// GET /genres:
// Obtener todos los tipos de géneros de videojuegos posibles
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get('/', (req, res, next) => {
    Genre.findAll()
        .then((response) => res.json(response))
        .catch((err) => next(err))  
});

module.exports = router;
