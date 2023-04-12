const path = require('path');
const router = require('express').Router();

const{ getPostsController, addPostController, addUserController} = require('../controllers')

const loginController = require('../controllers/users/loginUser')

router.get('/signup', (req, res)=>{
 res.status(200).sendFile(path.join(__dirname,'..','..', 'public','control','signup.html' ));
})

router.get('/login', (req, res)=>{
  res.status(200).sendFile(path.join(__dirname,'..','..', 'public','control','login.html' ));
 })

router.post('/signup', addUserController)

router.post('/login' , loginController)
 
router.get('/posts', getPostsController)

router.post('/posts', addPostController)

module.exports = router;