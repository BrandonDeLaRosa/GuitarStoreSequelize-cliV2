const jwt = require('jsonwebtoken')


const authenticate = (req, res, next) => {
    const token = req.headers["access-token"];
    // console.log(token);
    if (!token) {
        next({
            status: 400,
            error: "Unauthorized",
            message: "No token provided"
        })
    }

    try {
        const decoded = jwt.verify(token, 'secretWord', { algoritihms: "HS512" })
        console.log(decoded);

        //TODO req es un objeto, y al agregarlod  esta forma, se le esta agregando una nueva porpiedad = user y esta propiedad tiene la informacion decodificada.
        req.user = decoded; //? <--- CON ESTO AL OBJETO REQ, LE ESTAMOS AGREGANDO LOS VALORES DEL TOKEN DECODIFICADO.
        next() //?  <-- SE LE INDICA QUE DESPUES DE AUTENTICAR, PASE AL SIGUIENTE MIDDLEWARE QUE ES TRAER TODOS LOS USUARIOS

    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = authenticate;