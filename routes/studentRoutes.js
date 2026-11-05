const express = require('express');
const router = express.Router();
const {addStudent, getStudent, getStudentbyID} = require('../controllers/studentController');

router.post('/', addStudent);

router.get('/', addStudent);
router.get('/', getStudent);
router.get('/:id', getStudentbyID);
router.put('/:id', getStudentbyID);

module.exports = router;