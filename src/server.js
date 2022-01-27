const express = require('express')
const cors = require('cors');

//PATHS
const partidosPath = '/partidos';
const equiposPath = '/equipos';


class Server{

    constructor(){
        this.app = express();
        this.port = 3000;
        this.partidosPath = partidosPath;
        this.initMiddlewares();
        this.routes();

    }

    initMiddlewares(){
        this.app.use(cors());
        this.app.use(express.json());

    }

    routes(){
        this.app.use(partidosPath, require('./routes/partidos'))
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server is running on port: '+ this.port)
        });
    }
}

module.exports = Server;