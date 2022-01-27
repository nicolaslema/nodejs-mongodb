const {connectDB} = require('../utils/db');

const login =  async (usuario, password) =>{
    try {
        return ( await connectDB()).collection('usuarios').findOne({usuario, password})
    } catch (error) {
    console.log("🚀 ~ file: auth.model.js ~ line 7 ~ login ~ error", error.stack)
        
    }
}




module.exports = {login};
