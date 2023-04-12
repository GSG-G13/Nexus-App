const router = require('express').Router();
const path = require('path');
const addUser = require('../database/query/users/adduser');
const loginController = require('../controllers/users/loginUser')
const getPostsController = require('../controllers')

router.get('/login', (req, res)=>{
  res.status(200).sendFile(path.join(__dirname,'..','..', 'public','control','login.html' ));
 })

router.post('/login' , loginController)

router.get('/posts', getPostsController)

module.exports = router;