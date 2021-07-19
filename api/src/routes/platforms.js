const { Router } = require('express');
const router = Router();

const { Platform } = require('../db');

router.get('/', async (req, res) => {
    const response = await Platform.findAll();
    res.json(response);
});


module.exports = router;
