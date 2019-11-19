//Biblioteca de status HTTP
const HttpStatus = require('http-status-codes');

//Serviços para Genres
const services = require('../services/SessionServices');

//Server Restify
const server = require('../config/server').server;

//Validação de Token
//const validateToken = require('../config/token');

//Url do Recurso
const resourceName = '/authentication';

// server.get(resourceName, (request, response, next) => {
//     response.send(HttpStatus.OK, "OK");
// });

server.post(resourceName, (request, response, next) => {

    const {
        login,
        password
    } = request.params;

    services.authenticate(login, password)
        .then(auth => {
            response.send(HttpStatus.OK, auth);
        })
        .catch(err => {
            response.send(HttpStatus.UNAUTHORIZED, err);
        })

    next();
});
