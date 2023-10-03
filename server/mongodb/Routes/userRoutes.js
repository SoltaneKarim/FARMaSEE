const express = require('express');
const userController = require('../Controllers/userControllers'); 

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.get('/users/user/:fullname', userController.getUserByUsername);
router.put('/users/update/:fullname', userController.updateMessages); 

module.exports = router;
