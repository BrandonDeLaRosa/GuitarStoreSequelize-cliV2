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

    static async getSale(id){
        try {
            const result = await Sales.findByPk(id)
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async updateOneSale(id,saleBody){
        try {
            const updated = await Sales.update(saleBody,{
                where: {id}
            });
            return updated
        } catch (error) {
            throw(error)
        }
    }

    static async deleteOneSale(id){
        try {
            const deleted = await Sales.destroy({
                where: {id}
            })
            return deleted
        } catch (error) {
            throw(error)
        }
    }
};

module.exports = SaleServices;