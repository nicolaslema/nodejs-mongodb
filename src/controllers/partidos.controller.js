const { findAll, findLast, findByDate} = require("../services/partidos.service.js")



const findAllPartidos = async( req,  res) =>{
    try {
        const partidos = await findAll();
        res.json({partidos});
    } catch (error) {
        console.error("🚀 ~ file: partidos.controller.js ~ line 10 ~ findAllPartidos ~ error", error.stack)
    }
}


const findLastPartido = async(req, res) =>{
    try {
        const lastPartido = await findLast();
        res.json({lastPartido});
    } catch (error) {
        console.error("🚀 ~ file: partidos.controller.js ~ line 20 ~ findLastPartido ~ error", error.stack)
       
    }
}


const findPartidoByDate = async (req, res) =>{
    const {start, end} = req.query;
    try {
        const partidoByDate = await findByDate(start, end);
        
        res.json({partidoByDate});
    } catch (error) {
        console.error("🚀 ~ file: partidos.controller.js ~ line 32 ~ findPartidoByDate ~ error", error.stack)
        
    }
}









module.exports = { findAllPartidos,findLastPartido, findPartidoByDate }