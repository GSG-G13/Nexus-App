const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.send('hello World')
});

router.get('/signup', (req, res)=>{
 res.status(200).sendFile(path.join(__dirname,'..','..', 'public','control','signup.html' ));
})


router.post('/add-user', (req, res)=>{
  addUser(req.body)
  res.redirect('/signup');
})

module.exports = router;