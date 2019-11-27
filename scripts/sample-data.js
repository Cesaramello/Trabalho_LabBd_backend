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
        projectOwnerId: 3 //elmo
    },
    {
        id: 2,
        name: 'Frontend',
        desc: 'Desenvolvimento da UI utilizando Vue.js.',
        projectOwnerId: 1 //bianca
    },
    {
        id: 3,
        name: 'Banco de Dados',
        desc: 'Desenvolvimento do DB utizando SqLite e Sequelize',
        projectOwnerId: 2 //cesar
    },
    {
        id: 4,
        name: 'Documentação',
        desc: 'Processo de documentação e tecnologias utilizadas nos outros projetos.',
        projectOwnerId: 4 //enzo
    }
];

const tasks = [{
        id: 1,
        title: "Terminar CRUD de usuários",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lorem ut leo volutpat tincidunt non non tortor. Nulla a imperdiet urna. Integer ac lectus urna. Phasellus varius eget massa et viverra.",
        deadline: moment("09-12-2019 22:30", "DD-MM-YYYY HH:mm").toDate(),
        task_status: 'not_started',
        projectId: 1, //Backend
        taskOwnerId: 3 //Elmo
    },
    {
        id: 2,
        title: "Corrigir tela de listagem de tarefa",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lorem ut leo volutpat tincidunt non non tortor. Nulla a imperdiet urna. Integer ac lectus urna. Phasellus varius eget massa et viverra.",
        deadline: moment("09-12-2019 22:30", "DD-MM-YYYY HH:mm").toDate(),
        task_status: 'not_started',
        projectId: 3, //Frontend
        taskOwnerId: 2 //Cesar
    },
    {
        id: 3,
        title: "Insert de dados no banco",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lorem ut leo volutpat tincidunt non non tortor. Nulla a imperdiet urna. Integer ac lectus urna. Phasellus varius eget massa et viverra.",
        deadline: moment("09-12-2019 22:32", "DD-MM-YYYY HH:mm").toDate(),
        task_status: 'not_started',
        projectId: 3, //Banco de dados
        taskOwnerId: 1 //Bianca
    },
    {
        id: 4,
        title: "Criação de consultas de SQL",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lorem ut leo volutpat tincidunt non non tortor. Nulla a imperdiet urna. Integer ac lectus urna. Phasellus varius eget massa et viverra.",
        deadline: moment("09-12-2019 22:31", "DD-MM-YYYY HH:mm").toDate(),
        task_status: 'not_started',
        projectId: 3, //Banco de dados
        taskOwnerId: 2 //Cesar
    }
];

module.exports = {
    users,
    projects,
    tasks
};
