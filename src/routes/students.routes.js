const {Router} = require('express');
const { getAllStudents, createNewStudent } = require('../controllers/students.controller');


const router = Router();

router.get('/students', getAllStudents);
router.post('/student', createNewStudent );

// router.route('/admin/:id')
// .get(getOneClass)
// .put(updateClass)
// .delete(deleteClass)

module.exports = router;