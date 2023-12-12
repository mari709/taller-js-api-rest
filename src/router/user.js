const express = require("express");
const { getUsers } = require("../controller/user");

const router = express.Router();

router.get("/", getUsers);

//const userController = require('../controllers/users');

//router.get('/:id', usersController.getUser);

/*
const { getUsers, singUpUser, singInUser } = require('../controller/users');
const { verifyToken } = require('../jwt/jwt');

const router = express.Router();

router.get('/', verifyToken, getUsers);
router.post('/', singUpUser);
router.post('/login', singInUser);
*/

module.exports = router;
