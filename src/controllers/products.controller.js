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

const getOneProduct = async (req,res,next) => {
    try {
        const {id} = req.params;
        const getProduct = await productServices.getOne(id);
        res.status(201).json(getProduct)
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
}

const updateProduct = async (req,res,next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        await productServices.updateOneProduct(id,body);
        res.status(200).send("Updated")
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteProduct = async (req,res,next) => {
    try {
        const {id} = req.params;
        await productServices.deleteOneProduct(id);
        res.status(200).send("Deleted")
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllProducts,
    createNewProduct,
    getOneProduct,
    updateProduct,
    deleteProduct
};