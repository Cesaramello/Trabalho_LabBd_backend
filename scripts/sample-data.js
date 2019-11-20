const moment = require('moment');

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
        ProjectOwnerId: 3 //elmo
    },
    {
        id: 2,
        name: 'Frontend',
        desc: 'Desenvolvimento da UI utilizando Vue.js.',
        ProjectOwnerId: 1 //bianca
    },
    {
        id: 3,
        name: 'Banco de Dados',
        desc: 'Desenvolvimento do DB utizando SqLite e Sequelize',
        ProjectOwnerId: 2 //cesar
    },
    {
        id: 4,
        name: 'Documentação',
        desc: 'Processo de documentação e tecnologias utilizadas nos outros projetos.',
        ProjectOwnerId: 4 //enzo
    }
];

const tasks = [{
        id: 1,
        title: "Terminar CRUD de usuários",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lorem ut leo volutpat tincidunt non non tortor. Nulla a imperdiet urna. Integer ac lectus urna. Phasellus varius eget massa et viverra.",
        deadline: moment("09-12-2019 22:30", "DD-MM-YYYY HH:mm").toDate(),
        task_status: 'not_started',
        projectId: 1, //Backend
        TaskOwnerId: 3 //Elmo
    },
    {
        id: 2,
        title: "Corrigir tela de listagem de tarefa",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lorem ut leo volutpat tincidunt non non tortor. Nulla a imperdiet urna. Integer ac lectus urna. Phasellus varius eget massa et viverra.",
        deadline: moment("09-12-2019 22:30", "DD-MM-YYYY HH:mm").toDate(),
        task_status: 'not_started',
        projectId: 2, //Frontend
        TaskOwnerId: 2 //Cesar
    }
];

module.exports = {
    users,
    projects,
    tasks
};
