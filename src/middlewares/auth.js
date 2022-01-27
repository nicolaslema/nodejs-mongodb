const fs = require('fs');
const jwt = require('jsonwebtoken');
const key = fs.readFileSync('./src/keys/public.pem')

const securedRoute = (req, res, next) =>{
    try {
        const {authorization} = req.headers 
        const {_id} =  jwt.verify(authorization, key);
        req.id = _id;


        next();



    } catch (error) {
    console.error("🚀 ~ file: auth.js ~ line 8 ~ securedRoute ~ error", error.stack)
    res.status(401).json({message: 'Unauthorized'})
        
    }
}

module.exports = {securedRoute};
