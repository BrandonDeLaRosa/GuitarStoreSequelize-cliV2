const {SalesProducts, Sales} = require('../database/models');
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

const getOneSale = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result = await SaleServices.getSale(id);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateSale = async (req,res,next) => {
    try {
        const {id} = req.params;
        const saleBody = req.body;
        const updatedSale = await SaleServices.updateOneSale(id,saleBody);
        res.status(201).json(updatedSale)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteSale = async (req,res,next) => {
    try {
        const {id} = req.params;
        const deletedsale = await SaleServices.deleteOneSale(id);
        res.status(201).json(deletedsale)
    } catch (error) {
        res.status(400).json(error)
    }
}


const addNewSale = async (req,res,next) => {
    try {
        const {saleId,productId,quantity,price} = req.body;
        // await SaleServices.newSale(saleId,productId,quantity,price)
        await SalesProducts.create({saleId,productId,quantity,price});
        const total = price * quantity;
        await Sales.increment({total}, {where: {id: saleId}})
        res.status(201).json({
            // sale,
            message: "Producto agregado."
        })
    } catch (error) {
        console.log(error); 
        next(error)
    }
}



module.exports = {
    getAllSales,
    createNewSale,
    getOneSale,
    updateSale,
    deleteSale,
    addNewSale
}