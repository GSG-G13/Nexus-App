const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('hello World')
})

module.exports = router;