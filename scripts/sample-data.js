const users = [{
        id: 1,
        login: 'bianca',
        email: 'bianca@provedor.com',
        name: 'Bianca Ferreira da Frota Barreto',
        password: 'teste'
    },
    {
        id: 2,
        login: 'cesar',
        email: 'cesar@provedor.com',
        name: 'César Augusto Sampaio de Mello',
        password: 'teste'
    },
    {
        id: 3,
        login: 'elmo',
        email: 'elmo@provedor.com',
        name: 'Elmo Junior Ficagna',
        password: 'teste'
    },
    {
        id: 4,
        login: 'enzo',
        email: 'enzo@provedor.com',
        name: 'Enzo Moraes Pereira',
        password: 'teste'
    }
];

const projects = [{
        id: 1,
        name: 'Backend',
        desc: 'Desenvolvimento do WebService utilizando Node.js e Restify.',
        ProjectOwnerId: 3
    },
    {
        id: 2,
        name: 'Frontend',
        desc: 'Desenvolvimento da UI utilizando Vue.js.',
        ProjectOwnerId: 1
    },
    {
        id: 3,
        name: 'Banco de Dados',
        desc: 'Desenvolvimento do DB utizando SqLite e Sequelize',
        ProjectOwnerId: 2
    },
    {
        id: 4,
        name: 'Documentação',
        desc: 'Processo de documentação e tecnologias utilizadas nos outros projetos.',
        ProjectOwnerId: 4
    }
];

module.exports = {
    users,
    projects
};
