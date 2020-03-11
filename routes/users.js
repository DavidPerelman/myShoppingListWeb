const express = require('express');
const router = express.Router();

const { 
    signup, 
    login,
    updateUser,
    deleteUser
 } = require('../controllers/users');

router.post('/signup', signup);
router.post('/login', login);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;