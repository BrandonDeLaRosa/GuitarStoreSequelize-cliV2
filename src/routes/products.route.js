const {Router} = require('express');
const { getAllProducts, createNewProduct } = require('../controllers/products.controller');

const router= Router();

router.get('/products', getAllProducts)
router.post('/product', createNewProduct)

module.exports = router;