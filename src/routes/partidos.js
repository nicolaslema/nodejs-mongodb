const express = require('express');
const router = express.Router();
const { findAllPartidos, findLastPartido, findPartidoByDate} = require('../controllers/partidos.controller.js')
const {securedRoute} = require('../middlewares/auth')

//@desc todos los partidos
//@route GET /partidos/findAll
router.get('/findAll',securedRoute, findAllPartidos);

//@desc el ultimo partido
//@route GET /partidos/findLast
router.get('/findLast', securedRoute, findLastPartido);

//@desc partido por fecha y hora
//@route GET /partidos/findLast
router.post('/findByDate', securedRoute, findPartidoByDate);




module.exports = router;