const {connectDB} = require('../utils/db');

const login =  async (usuario, password) =>{
    try {
        return ( await connectDB()).collection('usuarios').findOne({usuario, password})
    } catch (error) {
        
    }
}




module.exports = {login};
