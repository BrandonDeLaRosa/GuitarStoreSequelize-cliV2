const {Router} = require ('express');
const {getAllAdmin, createNewAdmin, getOneAdmin, updateAdmin, deleteAdmin} = require('../controllers/schoolAdmin.controller');
const {createSchoolAdminValidator, updateSchoolAdminValidator} = require('../validators/schoolAdmin.validators');
// const authenticate = require('../middleware/auth.middleware');
// const authenticate = require('../middleware/auth.middleware');


const router = Router() ;

router.get('/admins', getAllAdmin);
router.post('/admin', createSchoolAdminValidator, createNewAdmin);

router.route('/admin/:id')
.get(getOneAdmin)
.put(updateSchoolAdminValidator,updateAdmin)
.delete(deleteAdmin)

module.exports = router;