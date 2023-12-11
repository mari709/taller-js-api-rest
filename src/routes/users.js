const express = require('express');

const router = express.Router();
const userController = require('../controllers/users');

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);

/*
const { getUsers, singUpUser, singInUser } = require('../controller/users');
const { verifyToken } = require('../jwt/jwt');

const router = express.Router();

router.get('/', verifyToken, getUsers);
router.post('/', singUpUser);
router.post('/login', singInUser);
*/

module.exports = router;