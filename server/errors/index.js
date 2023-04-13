const path = require('path')

/*
    Please note that the controller that accepts 'next' parameter
    will throw a server side error
*/
/*
TODO: edit these errors to correctly handle server and client errors
*/

const clientError = (err, req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', '..', '..', 'public', 'errors', '404.html' ));
}

const serverError = (err, req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', '..', '..', 'public', 'errors', '500.html' ));
}

module.exports = { clientError, serverError };