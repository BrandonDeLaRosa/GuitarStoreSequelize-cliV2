const {
    ValidationError,
    DatabaseError,
    ConnectionError,
    ConnectionAcquireTimeoutError,
    ConnectionRefusedError,
    ConnectionTimedOutError,
    InvalidConnectionError
} = require('sequelize');


const logError = (error,req,res,next) => {
    console.log(error);
 next(error)
}

module.exports = {
    logError
}

