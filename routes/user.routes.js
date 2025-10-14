const express = require('express');
const { createUser, fetchUsers } = require('../controllers/user.controller')

const router = express.Router();

router.post('/register', createUser)
router.get('/getUsers', fetchUsers)

module.exports = router;