const {Sales, salesproducts} = require('../database/models');
// const salesproducts = require('../database/models/salesproducts');

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

    static async newSale(saleId,productId,quantity,price){
        try {
            const selling = await salesproducts.create(saleId,productId,quantity,price)
            const total = price * quantity;
            await Sales.increment({total}, {where: {id: saleId}})
            return selling
        } catch (error) {
            throw error
        }
    }
};

module.exports = SaleServices;