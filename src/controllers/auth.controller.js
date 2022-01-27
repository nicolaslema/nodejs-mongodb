const {auth} = require('../services/auth.service')

const Login = async(req, res) =>{
    try {
        const currentUser = await auth(req,res);
        res.send(currentUser)
    } catch (error) {
        console.error("🚀 ~ file: partidos.controller.js ~ line 20 ~ findLastPartido ~ error", error.stack)
       
    }
}

module.exports = {Login}