const jwt = require('jsonwebtoken')

class AuthServices {
    static genToken(payload){
        try {
            const token = jwt.sign(payload, "secretWord",{
                algorithm:"HS512",
                expiresIn: "10d"
            })
            return token
        } catch (error) {
            throw error
        }
    }
}

module.exports = AuthServices;