const {Router} = require('express');
const adminLogin = require('../controllers/auth.controller');

const router = Router();
router.post('/auth/login', adminLogin)


module.exports = router