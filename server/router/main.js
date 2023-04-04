const express = require('express');
const router = express.Router();
const validate = require('../middleware/validator');
const { register, login } = require('../controllers/auth');

// I routeri ateina DATA requestas router.post('/register', validate, register); tada validuojamas su middleware ir jei viskas gerai eina i controlllers-register.
router.post('/register', validate, register);
router.post('/login', validate, login);

module.exports = router;
