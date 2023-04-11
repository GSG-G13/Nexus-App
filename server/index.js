const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Server Is Running On http://localhost:${app.get('port')}`);
})