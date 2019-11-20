//Importa a conexão Sequelize com o DB
const sequelize = require('../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Tratar Datas
const moment = require('moment');

//Definição do Sequelize Model
const Task = sequelize.define('task', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'O título da tarefa é obrigatório.'
            }
        }
    },
    desc: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'A descrição da tarefa é obrigatório.'
            }
        }
    },
    start_date: {
        type: Sequelize.DATE
    },
    done_date: {
        type: Sequelize.DATE
    },
    deadline: {
        type: Sequelize.DATE
    },
    task_status: {
        type: Sequelize.ENUM,
        values: ['not_started', 'started', 'done']
    }
});


//Hooks (Triggers)
Task.addHook('afterUpdate', (task, options) => {
    const oldTask = task._previousDataValues;

    if (oldTask.task_status == 'not_started' && task.task_status == 'started') {
        task.start_date = moment().toDate();
    }

    if (oldTask.task_status == 'started' && task.task_status == 'done') {
        task.done_date = moment().toDate();
    }
});

module.exports = Task;
