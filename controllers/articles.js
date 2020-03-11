module.exports = {
    getAllArticles: (req, res) => {
        res.status(200).send({ 
            message: 'Get All Articles'
         });
    },
    createArticle: (req, res) => {
        res.status(200).send({ 
            message: 'Create a new Article'
         });
    },
    updateArticle: (req, res) => {
        const articleId = req.params.articleId;
    
        res.status(200).send({ 
            message: `Update Article ${articleId}`
         });
    },
    deleteArticle: (req, res) => {
        const articleId = req.params.articleId;
    
        res.status(200).send({ 
            message: `Delete Article ${articleId}`
         });
    }
}