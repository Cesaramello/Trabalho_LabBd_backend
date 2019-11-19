const authentication = require('./AuthenticationRouter');
const project = require('./ProjectRouter');

const routes = [
    authentication,
    project,
];

module.exports = routes;
