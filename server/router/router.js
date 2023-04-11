const router = require('express').Router();
const path = require('path');
const getPostsController = require('../controllers')

router.get('/signup', (req, res)=>{
 res.status(200).sendFile(path.join(__dirname,'..','..', 'public','control','signup.html' ));
})


router.post('/add-user', (req, res)=>{
  addUser(req.body)
  res.redirect('/signup');
})

router.get('/posts', getPostsController)

module.exports = router;