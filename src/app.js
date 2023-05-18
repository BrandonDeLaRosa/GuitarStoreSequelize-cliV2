const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const hpp = require('morgan');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const xss = require ('xss-clean');
const ApiRoutes = require('./routes');
// const {SchoolAdmin,Customers} = require ('./database/models');

// !ERROR GRAMATICAL FOREING KEY Y CUANDO SE CREA UN FIELD EN MIGRACIONES, SE DEBE CREAR D ENUEVO EN MODELOS.




//TODO Configuracion basica de la APP.

const app = express();

const limiter = rateLimit({
    max:100000,  //!Max num de peticiones que soporta.
    windowMs: 60 * 60 * 1000,    //! En una hora pueden realizarse 100000 peticiones, si se sobrepasa, se bloquea.
    message: 'Too many requests from this IP, please try again in one hour.'                         
})

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(helmet());  //! Encabezados adicionales de seguridad.
app.use(express.json());
app.use(cors());
app.use(xss());
app.use(hpp());

app.use('/api/v1',limiter)    //? Todas las rutas que inicien con el /api... las va configurar con el limiter.

ApiRoutes(app); 

// app.post('/api/v1/guitarStore/admin', async (req,res) => {
//     try {
//         const body = req.body;
//         const admin = await SchoolAdmin.create(body);
//         res.status(201).json(admin)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// });
// app.post('/api/v1/guitarStore/customers', async (req,res) => {
//     try {
//         const body = req.body;
//         const customer = await Customers.create(body);
//         res.status(201).json(customer)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// });



//TODO Rutas


//TODO Excepciones de rutas no encontradas.


//TODO Controlador de manejo de errores.

module.exports = app;