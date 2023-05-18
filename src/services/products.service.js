const { Products } = require('../database/models');

class productServices {

    static async allProducts(){
        try {
            const products = await Products.findAll()
            return products
        } catch (error) {
            throw(error)
        }
    }
    static async newProduct(body){
        try {
            const product = await Products.create(body)
            return product
        } catch (error) {
            throw(error)
        }
    }
};

module.exports = productServices;