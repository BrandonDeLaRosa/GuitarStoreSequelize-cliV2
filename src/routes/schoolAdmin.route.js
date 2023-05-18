const {Router} = require ('express');
const {getAllAdmin, createNewAdmin, getOneAdmin, updateAdmin, deleteAdmin} = require('../controllers/schoolAdmin.controller');


const router = Router() ;

router.get('/admins', getAllAdmin);
router.post('/admin', createNewAdmin);

router.route('/admin/:id')
.get(getOneAdmin)
.put(updateAdmin)
.delete(deleteAdmin)
// module.exports= router; 

module.exports = router;