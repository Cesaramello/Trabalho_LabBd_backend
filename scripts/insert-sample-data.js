const model = require('../model');

const {
    User,
    Project
} = model;

const sampleData = require('./sample-data');
const {
    users,
    projects
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
            console.error('Erro ao criar o usuário', project, err);
        })
});



// sampleGenres.map(genre => {
//     Genre.create(genre)
//         .then(createdGenre => {
//             console.log(JSON.stringify(createdGenre, null, 4));
//         })
//         .catch(err => {
//             console.error('Erro ao criar o gênero', genre, err);
//         })
// });

// sampleProfessionals.map(professional => {
//     Professional.create(professional)
//         .then(createdProfessional => {
//             console.log(JSON.stringify(createdProfessional, null, 4));
//         })
//         .catch(err => {
//             console.error('Erro ao criar o profissional', professional, err);
//         })
// });

// sampleMovies.map((movie) => {
//     Movie.create(movie)
//         .then(createdMovie => {
//             //Vincula Generos
//             movie.genres.map(genreId => {
//                 Genre.findByPk(genreId)
//                     .then(genre => {
//                         createdMovie.addGenre(genre);
//                     })
//                     .catch(err => {
//                         console.error('Erro ao ler o gênero', err);
//                     })
//             })

//             //Vincula Diretores
//             movie.directors.map(professionalId => {
//                 Professional.findByPk(professionalId)
//                     .then(professional => {
//                         createdMovie.addDirector(professional);
//                     })
//                     .catch(err => {
//                         console.error('Erro ao ler o diretor', err);
//                     })
//             });

//             //Vincula Escritores
//             movie.writers.map(professionalId => {
//                 Professional.findByPk(professionalId)
//                     .then(professional => {
//                         createdMovie.addWriter(professional);
//                     })
//                     .catch(err => {
//                         console.error('Erro ao ler o escritor', err);
//                     })
//             });

//             //Vincula atores
//             movie.actors.map(actor => {
//                 Professional.findByPk(actor.professionalId)
//                     .then(professional => {
//                         Role.create({
//                             movieId: createdMovie.dataValues.id,
//                             professionalId: professional.dataValues.id,
//                             character: actor.character
//                         });
//                     })
//                     .catch(err => {
//                         console.error('Erro ao ler o ator', err);
//                     })
//             });

//             console.log(JSON.stringify(createdMovie, null, 4));

//         })
//         .catch(err => {
//             console.error('Erro ao criar o filme.', movie, err);
//         })
// });
