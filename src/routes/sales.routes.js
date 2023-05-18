const {Router} = require('express');
const { getAllSales, createNewSale, getOneSale, updateSale, deleteSale } = require('../controllers/sales.controller');




const router = Router();

router.get('/sales', getAllSales);
router.post('/sales', createNewSale);

router.route('/sale/:id')
.get(getOneSale)
.put(updateSale)
.delete(deleteSale)

module.exports = router;