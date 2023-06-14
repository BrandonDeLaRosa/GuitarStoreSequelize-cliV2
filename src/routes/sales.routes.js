const {Router} = require('express');
const { getAllSales, createNewSale, getOneSale, updateSale, deleteSale, addNewSale } = require('../controllers/sales.controller');




const router = Router();

router.get('/sales', getAllSales);
router.post('/sale', createNewSale);
router.post('/addProduct/sale', addNewSale);

router.route('/sale/:id')
.get(getOneSale)
.put(updateSale)
.delete(deleteSale)

module.exports = router;