//Importa a conexão Sequelize com o DB
const sequelize = require('../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Deps de Associations
const Task = require('./Task');

//Definição do Sequelize Model
const Project = sequelize.define('project', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    desc: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Task.belongsTo(Project);

module.exports = Project;
