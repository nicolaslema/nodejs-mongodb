const express = require('express');
const router = express.Router();
const {Login} = require('../controllers/auth.controller.js')


//@desc todos los partidos
//@route GET /auth
router.post('/', Login);




module.exports = router;