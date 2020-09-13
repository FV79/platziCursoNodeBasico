const express = require('express');

const response = require('../network/response');
const Store = require('../store/redis');

const router = express.Router();


// Es ára acceder a un archivo para almacener cache temporal se le tendra que asignar un tiempo para que limpie cache
router.get('/:table', list);
router.get('/:table/:id', get);

async function list(req, res, next) {
    const datos = await Store.list(req.params.table)
    response.success(req, res, datos, 200);
}

async function get(req, res, next) {
    const datos = await Store.get(req.params.table, req.params.id)
    response.success(req, res, datos, 200);
}


module.exports = router;