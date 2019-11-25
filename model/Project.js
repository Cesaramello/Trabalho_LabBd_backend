//Importa a conexão Sequelize com o DB
const sequelize = require('../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Deps de Associations
const User = require('./User');
const Task = require('./Task');

//Definição do Sequelize Model
const Project = sequelize.define('project', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Nome de projeto já em uso.'
        },
        validate: {
            notNull: {
                msg: 'O nome do projeto é obrigatório.'
            }
        }
    },
    desc: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Descrição do projeto é obrigatória'
            }
        }
    }
});

Task.belongsTo(Project);

module.exports = Project;
