const model = require('../model');

const {
    User,
    Project,
    Task
} = model;

const sampleData = require('./sample-data');
const {
    users,
    projects,
    tasks
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
            console.error('Erro ao criar o projeto', project, err);
        })
});

insertUsersinProjects = async () => {

    const users = await User.findAll();
    const projects = await Project.findAll();


    users.map(user => {
        projects.map(async project => {
            await user.addWorksOn(project);
        });
    });
};

insertUsersinProjects();

tasks.map(task => {
    Task.create(task)
        .then(createdTask => {
            console.log(JSON.stringify(createdTask, null, 4));
        })
        .catch(err => {
            console.error('Erro ao criar a tarefa', task, err);
        })
});
