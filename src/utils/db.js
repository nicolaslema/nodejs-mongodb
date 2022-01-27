const MongoClient = require('mongodb').MongoClient;


const db_uri = "mongodb://localhost:27017/"
const db_name = "practica"



//referencia a la conexion
 const connectDB = async () =>{
    try {
        const conn = await MongoClient.connect(db_uri);
        console.log("🚀 ~ file: db.js ~ line 15 ~ Connection Stable ~ The DB received request ")
        
        return await conn.db(db_name)
     
    }catch (error) {
    console.error("🚀 ~ file: db.js ~ connectDB ~ error", error.stack)
    }

}

module.exports = { connectDB };