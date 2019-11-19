const model = require('../model');

const {
    User,
    Project
} = model;

const sampleData = require('./sample-data');
const {
    users,
    projects
} = sampleData;


users.map(user => {
    User.create(user)
        .then(createdUser => {
            console.log(JSON.stringify(createdUser, null, 4));
        })
        .catch(err => {
            console.error('Erro ao criar o usuário', user, err);
        })
});

projects.map(project => {
    Project.create(project)
        .then(createdProject => {
            console.log(JSON.stringify(createdProject, null, 4));
        })
        .catch(err => {
            console.error('Erro ao criar o usuário', project, err);
        })
});
