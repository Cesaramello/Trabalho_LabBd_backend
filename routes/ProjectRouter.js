//Biblioteca de status HTTP
const HttpStatus = require('http-status-codes');

//Serviços para Genres
const services = require('../services/ProjectServices');

//Server Restify
const server = require('../config/server').server;

//Validação de Token
const validateToken = require('../hooks/validateToken');

//Url do Recurso
const resourceName = '/project';

server.get(resourceName, validateToken, (request, response, next) => {

    services.getAll()
        .then(events => {
            console.log(events);
            response.send(HttpStatus.OK, events ? events : []);
        })
        .catch(err => {
            console.error(err);
            response.send(HttpStatus.SERVICE_UNAVAILABLE, errr);
        })

    next();
});

server.post(resourceName, validateToken, (request, response, next) => {

    

    next();
});
