const User = require('../models/User');
const mongoose = require('mongoose');

module.exports = {
    getAllUsers: (req, res) => {
    User.find().then((users) => {
        res.status(200).json({
            users
            })
        }).catch(error => {
       res.status(500).json({
            error
            })
        });
    },
    signup: (req, res) => {
        const { userName, email, password } = req.body;

        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            userName,
            email,
            password
        })

        user.save();
    },
    login: (req, res) => {
        res.status(200).json({
            message: 'Login'
        })
    },
    updateUser: (req, res) => {
        const userId = req.params.userId
        res.status(200).json({
            message: `Update user ${userId}`
        })
    },
    deleteUser: (req, res) => {
        const userId = req.params.userId
        res.status(200).json({
            message: `Delete user ${userId}`
        })
    }
}