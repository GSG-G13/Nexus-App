const router = require('express').Router();
const getPostsController = require('../controllers')

router.get('/posts', getPostsController)

module.exports = router;