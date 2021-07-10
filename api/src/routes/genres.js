const { Router } = require('express');
const router = Router();

const { Genre } = require('../db');

// GET /genres:
// Obtener todos los tipos de géneros de videojuegos posibles
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get('/', async (req, res) => {
    const response = await Genre.findAll();
    res.json(response);
});

module.exports = router;
