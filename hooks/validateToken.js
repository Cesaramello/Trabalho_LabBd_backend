//Biblioteca de status HTTP
const HttpStatus = require('http-status-codes');

//Serviços para Genres
const services = require('../services/SessionServices');

const validateToken = (request, response, next) => {

    const token = request.header('token') ? request.header('token') : null;
    const userId = request.header('userId') ? request.header('userId') : null;

    if (token && userId) {
        services.validate(token, userId)
            .then(user => {
                return next();
            })
            .catch(err => {
                response.send(HttpStatus.NETWORK_AUTHENTICATION_REQUIRED, err);
                return next(false);
            })
    } else {
        response.send(HttpStatus.NETWORK_AUTHENTICATION_REQUIRED, "Headers de autenticação não encontrados.");
        return next(false);
    }
};

module.exports = validateToken;
