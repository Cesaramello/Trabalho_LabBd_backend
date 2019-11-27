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

ProjectServices.get = (project) => new Promise((resolve, reject) => {
    Project.findOne({
            where: {
                id: project.id
            }
        })
        .then((projectFound) => {
            if (projectFound) {
                resolve(projectFound);
            } else {
                reject("Não foi possível encontrar o projeto.");
            }
        })
        .catch(err => {
            reject(err);
        });
});

ProjectServices.create = (project) => new Promise((resolve, reject) => {
    Project.create(project)
        .then((createdProject) => resolve(createdProject))
        .catch(err => {
            reject(err);
        });
});

ProjectServices.delete = (project) => new Promise((resolve, reject) => {
    ProjectServices.get(project)
        .then((projectFound) => {
            if (projectFound.projectOwnerId == project.projectOwnerId) {
                projectFound.destroy()
                    .then((removedProject) => resolve(removedProject));
            } else {
                reject("Você não possui permissão para excluir este projeto.");
            }
        })
        .catch(err => {
            reject(err);
        });
});

module.exports = ProjectServices;
