require ('dotenv').config();

const app = require('./app');


const PORT = +process.env.PORT || 4000;  //* +process === Number(process.env.PORT) el '*' Convierte el string de process... a number.

app.listen(PORT, () => {
    console.log(`App Running On Port ${PORT} 😀😀` );
}) 