const router = require('express').Router();

const { addPostController } = require('../controllers')

router.get('/', (req, res) => {
  res.send('hello World')
})

router.post('/post', addPostController)

module.exports = router;