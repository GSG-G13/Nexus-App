const path = require('path');
const router = require('express').Router();

const{ getPostsController, addPostController} = require('../controllers')

router.get('/signup', (req, res)=>{
 res.status(200).sendFile(path.join(__dirname,'..','..', 'public','control','signup.html' ));
})

router.post('/add-user', (req, res)=>{
  addUser(req.body)
  res.redirect('/signup');
})

router.get('/posts', getPostsController)

router.post('/posts', addPostController)

module.exports = router;