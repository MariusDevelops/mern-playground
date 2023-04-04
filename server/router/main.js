const express = require('express');
const router = express.Router();
const validate = require('../middleware/validator');
const { register, login } = require('../controllers/auth');

router.post('/register', validate, register);
router.post('/login', validate, login);

module.exports = router;
