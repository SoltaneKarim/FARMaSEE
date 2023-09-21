const express = require('express');
const userController = require('../Controllers/userControllers'); 

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.get('/users/:username', userController.getUserByUsername);
router.put('/users/:id/messages', userController.updateUserMessages); 

module.exports = router;
