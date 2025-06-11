const express = require('express');
const router = express.Router();
const { getUsers, createUser, login } = require('../controllers/user.controller');
const verifyToken = require('../middleware/auth');
const validate = require('../middleware/validate');
const { registerSchema, loginSchema } = require('../validators/user.validator');

router.get('/', verifyToken, getUsers);
router.post('/', validate(registerSchema), createUser);
router.post('/login', validate(loginSchema), login);

module.exports = router;
