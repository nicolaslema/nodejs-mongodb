const {connectDB} = require('../utils/db');


//@desc Generic find function for the collection partidos
//
const find = async ({conditions = {}, projection = {}, sort = {}, limit = 50}) =>{
    try {
        return ( await connectDB())
        .collection('partidos')
        .find(conditions,{projection})
        .sort(sort)
        .limit(limit)
        .toArray();

    } catch (error) {
        console.error(error.stack)
    }
}


//@desc Find all items in partidos
//
const findAll = async () => find({})


//@desc Find Last item in partidos
//
const findLast = async () => find({sort: {_id: -1}, limit: 1})

//@desc Find items by date in partidos
//
const findByDate = (start, end) => find({
    conditions: {
        fecha: {
            //greater than equal
            $gte: new Date(start), //ISOString
            
            //low than equal
            $lte: new Date(end) //ISOString
        },
    },
});
 

module.exports = {findAll, findLast, findByDate}