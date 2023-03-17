const router = require('express').Router()
const { newData,readData
} = require('../services/lineas');


router.post('/carga/data', async (req, res) => {
    const response = await newData(req, res);
    res.json(response);
})
router.post('/listar/data', async (req, res) => {
    const response = await readData(req, res);
    res.json(response);
})
router.post('/listar/data', async (req, res) => {
    const response = await readData(req, res);
    res.json(response);
})

module.exports = router