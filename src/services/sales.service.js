const {Sales} = require('../database/models');

class SaleServices {

    static async getAll(){
        try {
            const sales = await Sales.findAll();
            return sales
        } catch (error) {
            throw(error)
            
        }
    }

    static async newPurchase(body){
        try {
            const sale = await Sales.create(body);
            return sale
        } catch (error) {
            throw(error)
        }
    }
};

module.exports = SaleServices;