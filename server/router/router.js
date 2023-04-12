const path = require('path');
const addUser = require('../database/query/users/adduser');
const loginController = require('../controllers/users/loginUser')
const getPostsController = require('../controllers')
const router = require('express').Router();

const{ getPostsController, addPostController, addUserController} = require('../controllers')

router.get('/login', (req, res)=>{
  res.status(200).sendFile(path.join(__dirname,'..','..', 'public','control','login.html' ));
 })

router.post('/login' , loginController)
router.post('/signup', addUserController)
 
router.post('/add-user', (req, res)=>{
  addUser(req.body)
  res.redirect('/signup');
})

router.get('/posts', getPostsController)

router.post('/posts', addPostController)

module.exports = router;