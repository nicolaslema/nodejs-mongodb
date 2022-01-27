const { response } = require('express');
const fs = require('fs'); //file system read
const jwt = require('jsonwebtoken');
const sha1 = require('sha1'); //SHA family
const model = require('../models/auth.model')
const key = fs.readFileSync('./src/keys/private.pem')


const createToken = (payload) => jwt.sign(payload, key, {algorithm: 'RS256'}, {expiresIn: '6hs'});


const auth = async(req, res) =>{
    const {usuario, password} =  req.body;
    const user = await model.login(usuario, sha1(password));
    if(!user) res.status(401).json({message: "no autorizado"});
    const {_id} = user;
    const token = createToken({_id, usuario})
    res.json({JWT: token})
}



module.exports = {auth}

