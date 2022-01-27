const {connectDB} = require('../utils/db');


//Datos de entrada --> validar
const create = async(obj) => 
(await connectDB())
.collection("partidos")
.insertOne(obj);





const findAll = async({conditions = {}, projection = {}, sort = {}, limit = 50 }) => {
    try {
        return (await connectDB()).collection('equipos').find().toArray();
        
    } catch (error) {
        console.error(error.stack)
    }

}



const findalltheitems =  (db, callback) =>{
    try {
        

    } catch (error) {
        
    }
}


const allPartidos = () => findAll({});

const last = () => findAll({sort: {_id: -1}, limit: 1})


module.exports ={create, last, allPartidos, findalltheitems};


