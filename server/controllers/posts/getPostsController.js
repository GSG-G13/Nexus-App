const getPostsQuery = require('../../database');

const getPostsController = (req, res) => {
    getPostsQuery()
        .then((data) => res.status(200).json({
            error: false,
            data: {
                message: 'message fetched succefully',
                data:data.rows
            }
        }))
        .catch((err) => res.status(500).json({
            error: true,
            message:err.message
    }))
}

module.exports = getPostsController;