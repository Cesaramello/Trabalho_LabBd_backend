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
        .then(projects => {
            console.log(projects);
            response.send(HttpStatus.OK, projects ? projects : []);
        })
        .catch(err => {
            console.error(err);
            response.send(HttpStatus.SERVICE_UNAVAILABLE, err);
        })

    next();
});

server.get(resourceName + '/:projectId', validateToken, (request, response, next) => {

    const {
        projectId,
    } = request.params;

    const project = {
        id: projectId
    };

    services.get(project)
        .then(project => {
            console.log(project);
            response.send(HttpStatus.OK, project);
        })
        .catch(err => {
            console.error(err);
            response.send(HttpStatus.NOT_FOUND, err);
        });

    next();
});

server.post(resourceName, validateToken, (request, response, next) => {

    const userId = request.header('userId');

    const {
        projectName,
        projectDesc
    } = request.params;

    const project = {
        name: projectName || null,
        desc: projectDesc || null,
        projectOwnerId: userId
    }

    services.create(project)
        .then(createdProject => {
            console.log(createdProject);
            response.send(HttpStatus.OK, createdProject);
        })
        .catch(err => {
            console.error(err);
            response.send(HttpStatus.UNPROCESSABLE_ENTITY, err);
        })

    next();
});

server.del(resourceName + '/:projectId', validateToken, (request, response, next) => {

    const userId = request.header('userId');

    const {
        projectId,
    } = request.params;

    const project = {
        id: projectId,
        projectOwnerId: userId
    }

    services.delete(project)
        .then(deletedProject => {
            console.log(deletedProject);
            response.send(HttpStatus.OK, deletedProject);
        })
        .catch(err => {
            console.error(err);
            response.send(HttpStatus.UNPROCESSABLE_ENTITY, err);
        })

    next();
});
