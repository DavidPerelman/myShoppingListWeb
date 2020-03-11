module.exports = {
    getAllCategories: (req, res) => {
        res.status(200).send({ 
            message: 'Get All Categories'
         });
    },
    createCategory: (req, res) => {
        res.status(200).send({ 
            message: 'Create a new Category'
         });
    },
    updateCategory: (req, res) => {
        const categoryId = req.params.categoryId;
    
        res.status(200).send({ 
            message: `Update Category ${categoryId}`
         });
    },
    deleteCategory: (req, res) => {
        const categoryId = req.params.categoryId;
    
        res.status(200).send({ 
            message: `Delete Category ${categoryId}`
         });
    }
}