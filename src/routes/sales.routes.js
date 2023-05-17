const {Router} = require('express');
const { getAllSales, createNewSale } = require('../controllers/sales.controller');




const router = Router();

router.get('/sales', getAllSales);
router.post('/sales', createNewSale);
// router.get('/api/v1/guitarStore/customers/:id', getOneCustomer);
// router.put('/api/v1/guitarStore/class/:id',updateClass);
// router.delete('/api/v1/guitarStore/class/:id',deleteClass);

module.exports = router;