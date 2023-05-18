const {Router} = require('express');
const { getAllProducts, createNewProduct, getOneProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');


const router= Router();

router.get('/products', getAllProducts)
router.post('/product', createNewProduct)

router.route('/product/:id')
.get(getOneProduct)
.put(updateProduct)
.delete(deleteProduct)

module.exports = router;