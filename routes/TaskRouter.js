//Biblioteca de status HTTP
const HttpStatus = require('http-status-codes');

//Serviços para Genres
const services = require('../services/TaskServices');

//Server Restify
const server = require('../config/server').server;

//Validação de Token
const validateToken = require('../hooks/validateToken');

//Url do Recurso
const resourceName = '/task';

server.get(resourceName, validateToken, (request, response, next) => {

    services.getAll()
        .then(tasks => {
            console.log(tasks);
            response.send(HttpStatus.OK, tasks ? tasks : []);
        })
        .catch(err => {
            console.error(err);
            response.send(HttpStatus.SERVICE_UNAVAILABLE, err);
        })

    next();
});

server.get(resourceName + '/:taskId', validateToken, (request, response, next) => {

    const {
        taskId,
    } = request.params;

    const task = {
        id: taskId
    };

    services.get(task)
        .then(task => {
            console.log(task);
            response.send(HttpStatus.OK, task);
        })
        .catch(err => {
            console.error(err);
            response.send(HttpStatus.NOT_FOUND, err);
        });

    next();
});

