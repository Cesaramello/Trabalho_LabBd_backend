const model = require('../model');

const {
    Project,
    User
} = model;

const ProjectServices = {};

ProjectServices.getAll = () => new Promise((resolve, reject) => {
    Project.findAll()
        .then(projects => resolve(projects))
        .catch(err => {
            reject(err);
        });
});

module.exports = ProjectServices;
