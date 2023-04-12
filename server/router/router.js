const path = require('path');
const router = require('express').Router();

const{ getPostsController, addPostController, addUserController} = require('../controllers')

router.get('/signup', (req, res)=>{
 res.status(200).sendFile(path.join(__dirname,'..','..', 'public','control','signup.html' ));
})

router.post('/signup', addUserController)
 
router.get('/posts', getPostsController)

router.post('/posts', addPostController)

module.exports = router;