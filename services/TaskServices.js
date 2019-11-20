const model = require('../model');

const {
    Task
} = model;

const TaskServices = {};

TaskServices.getAll = () => new Promise((resolve, reject) => {
    Task.findAll()
        .then(tasks => resolve(tasks))
        .catch(err => {
            reject(err);
        });
});

TaskServices.get = (task) => new Promise((resolve, reject) => {
    Task.findOne({
            where: {
                id: task.id
            }
        })
        .then((taskFound) => {
            if (taskFound) {
                resolve(taskFound);
            } else {
                reject("Não foi possível encontrar a tarefa.");
            }
        })
        .catch(err => {
            reject(err);
        });
});

TaskServices.create = (task) => new Promise((resolve, reject) => {
    Task.create(task)
        .then((createdTask) => resolve(createdTask))
        .catch(err => {
            reject(err);
        });
});

module.exports = TaskServices;
