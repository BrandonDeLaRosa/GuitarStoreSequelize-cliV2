const SaleServices = require('../services/sales.service');


const getAllSales = async (req,res,next) => {
    try {
        const allSales = await SaleServices.getAll();
        res.status(201).json(allSales);
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
}

const createNewSale = async (req,res,next) => {
    try {
        const body = req.body;
        const newSale = await SaleServices.newPurchase(body);
        res.status(201).json(newSale)
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
}

module.exports = {
    getAllSales,
    createNewSale
}