const express = require('express');
const router = express.Router();
const { findAllPartidos, findLastPartido, findPartidoByDate} = require('../controllers/partidos.controller.js')





//@desc todos los partidos
//@route GET /partidos/findAll
router.get('/findAll', findAllPartidos);

//@desc el ultimo partido
//@route GET /partidos/findLast
router.get('/findLast', findLastPartido);

//@desc partido por fecha y hora
//@route GET /partidos/findLast
//FIXME: FIX THIS *(~~@#&(#@!))
router.post('/findByDate', findPartidoByDate);







module.exports = router;