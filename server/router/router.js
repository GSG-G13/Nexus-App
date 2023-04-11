const router = require('express').Router();
const{ getPostsController, addPostController} = require('../controllers')

router.get('/posts', getPostsController)

router.post('/posts', addPostController)

module.exports = router;