const express = require('express');
const router = express.Router();
const {addStudent, getStudent, getStudentbyID, updateStudent, deleteEntry} = require('../controllers/studentController');

router.post('/', addStudent);
router.get('/', getStudent);
router.get('/:id', getStudentbyID);
router.put('/:id', updateStudent);
router.delete('/:id', deleteEntry);

module.exports = router;