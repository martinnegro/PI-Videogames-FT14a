const { Router } = require('express');
const router = Router();

// GET /genres:
// Obtener todos los tipos de géneros de videojuegos posibles
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get('/', (req, res) => {
    res.send('BOLALSS.. /genres');
});

module.exports = router;
