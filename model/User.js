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
        unique: {
            args: true,
            msg: 'Este login já está em uso.'
        },
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
        unique: {
            args: true,
            msg: 'Já existe um usuário cadastrado para este e-mail.'
        },
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
    as: 'ProjectOwner',
    foreignKey: {
        allowNull: false
    }
});

User.belongsToMany(Project, {
    through: 'user_projects',
    as: 'WorksOn'
})

Task.belongsTo(User, {
    as: "TaskOwner",
    foreignKey: {
        allowNull: false
    }

});

User.belongsToMany(Task, {
    through: 'user_tasks',
    as: 'WorkingOn'
})

//Hooks (Triggers)
Project.addHook('afterCreate', (project, options) => {
    User.findByPk(project.ProjectOwnerId)
        .then(user => {
            user.addWorksOn(project);
        });
});

module.exports = User;
