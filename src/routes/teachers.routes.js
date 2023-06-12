const {Router} = require('express');
const { getAllTeachers, createNewTeacher, getOneTeacher, updateTeacher, deleteTeacher } = require("../controllers/teachers.controller");
// const { createTeacherValidator } = require('../validators/teacher.validator');




const router = Router();

router.get('/teachers', getAllTeachers);
router.post('/teacher', createNewTeacher);

router.route('/teacher/:id')
.get(getOneTeacher)
.put(updateTeacher)
.delete(deleteTeacher)

module.exports = router 