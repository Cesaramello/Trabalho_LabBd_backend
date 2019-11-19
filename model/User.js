//Importa a conexão Sequelize com o DB
const sequelize = require('../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Deps de Associations
const Session = require('./Session');
const Project = require('./Project');
const Task = require('./Task');

//Definição do Sequelize Model
const User = sequelize.define('user', {
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'O login é obrigatório.'
            },
            len: {
                args: [4, 10],
                msg: 'O login deve ter entre 4 e 10 caracteres.'
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'O email é obrigatório.'
            },
            isEmail: {
                msg: 'O email informado não é válido.'
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'A senha é obrigatório. '
            },
            len: {
                args: [5, 10],
                msg: 'A senha deve ter entre 5 e 10 caracteres.'
            }
        }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'O nome é obrigatório.'
            },
            len: {
                args: [4, 120],
                msg: 'O nome deve ter entre 5 e 120 caracteres.'
            }
        }
    }
});

//Associations
User.hasOne(Session);

User.hasOne(Project, {
    as: 'ProjectOwner'
});

User.belongsToMany(Project, {
    through: 'user_projects',
    as: 'WorksOn'
})

Task.belongsTo(User, {
    as: "TaskOwner"
});

User.belongsToMany(Task, {
    through: 'user_tasks',
    as: 'WorkingOn'
})

module.exports = User;
