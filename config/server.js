const restify = require('restify');
//Middleware para cuidar do CORS
const corsMiddleware = require('restify-cors-middleware')
//Porta do Servidor
const port = 9000;

//Criação do Singleton server
const server = restify.createServer({
    ignoreTrailingSlash: true,
    accept: [
        'application/json',
        'text/html',
        'image/png',
        'image/jpg'
    ]
});

//Habiliata o CORS (Cross-origin resource sharing)
const cors = corsMiddleware({
    origins: ['*'],
    allowHeaders: [
        'token',
        'userId'
    ]
});

server.pre(cors.preflight)
server.use(cors.actual)

//Ativa o bodyParser para parâmetros de corpo
server.use(restify.plugins.bodyParser({
    mapParams: true,
    mapFiles: false,
    overrideParams: false
}));

//Ativa o queryParser para parâmetros de URL
server.use(restify.plugins.queryParser());

module.exports = {
    server,
    port
};
