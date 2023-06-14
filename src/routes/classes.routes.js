const {Router} = require('express');
const { getAllClasses, getOneClass, createNewClass, updateClass, deleteClass, addStudent } = require('../controllers/classes.controllers');


const router = Router();

router.post('/class', createNewClass);
router.get('/classes', getAllClasses);
router.post('/addStudent', addStudent)

router.route('/class/:id')
.get(getOneClass)
.put(updateClass)
.delete(deleteClass)

module.exports = router;