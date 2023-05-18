const {Router} = require('express');
const { getAllTeachers, createNewTeacher } = require("../controllers/teachers.controller");




const router = Router();

router.get('/teachers', getAllTeachers);
router.post('/teacher', createNewTeacher)

module.exports = router