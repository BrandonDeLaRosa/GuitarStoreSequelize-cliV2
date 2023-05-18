const productServices = require('../services/products.service');

const getAllProducts = async (req,res,next) => {
    try {
        const products = await productServices.allProducts();
        res.status(201).json(products)
    } catch (error) {
        res.status(400).json(error)
    }
};

const createNewProduct = async (req,res,next) => {
    try {
        const body = req.body;
        const createProduct = await productServices.newProduct(body);
        res.status(201).json(createProduct);
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllProducts,
    createNewProduct
};