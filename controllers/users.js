module.exports = {
    signup: (req, res) => {
        res.status(200).json({
            message: 'Signup'
        })
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