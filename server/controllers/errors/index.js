const path = require('path')

const clientError = (err, req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', '..', '..', 'public', 'errors', '404.html' ));
}

const serverError = (err, req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', '..', '..', 'public', 'errors', '500.html' ));
}

module.exports = { clientError, serverError };