const {getPostsQuery} = require('../../database');

const getPostsController = (req, res) => {
  getPostsQuery()
    .then((data) => res.status(200).json({
        error: false,
        data: {
            message: 'message fetched succefully',
            posts:data.rows
        }
        }))
    .catch((err) => res.status(500).json({
        error: true,
        message:'server Error'
}))
}

module.exports = getPostsController;