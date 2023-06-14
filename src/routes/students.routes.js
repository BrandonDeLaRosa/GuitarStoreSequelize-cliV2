const {Router} = require('express');
const { getAllStudents, createNewStudent, getOneStudent, updateStudent, deleteStudent } = require('../controllers/students.controller');


const router = Router();

router.get('/students', getAllStudents);
router.post('/student', createNewStudent );

router.route('/student/:id')
.get(getOneStudent)
.put(updateStudent)
.delete(deleteStudent)

module.exports = router;  