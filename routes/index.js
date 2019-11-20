const authentication = require('./AuthenticationRouter');
const project = require('./ProjectRouter');
const task = require('./TaskRouter');

const routes = [
    authentication,
    project,
    task
];

module.exports = routes;
