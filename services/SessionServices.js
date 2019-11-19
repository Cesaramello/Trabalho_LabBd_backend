//INSEGURO - Não usar para produção
//[TODO] Substituir por JWT ou OAuth

const crypto = require('crypto');
const model = require('../model');

const {
    User,
    Session
} = model;

const SessionServices = {};

SessionServices.authenticate = (login, password) => new Promise((resolve, reject) => {

    User.findOne({
            where: {
                login: login,
                password: password
            },
            attributes: [
                'id',
                'login',
                'email',
                'name',
            ],
        })
        .then(user => {
            if (user) {
                console.log(user);
                crypto.randomBytes(16, (err, buffer) => {

                    Session.findAll({
                        where: {
                            userId: user.id
                        },
                    }).then(sessions => {
                        sessions.forEach(session => {
                            session.destroy();
                        });
                    }).then(() => {
                        Session.create({
                                token: buffer.toString('hex'),
                                userId: user.id,
                                active: true
                            })
                            .then(session => {
                                return resolve({
                                    user: user,
                                    session: session
                                })
                            })
                    });
                });
            } else {
                return reject('Usuário e/ou senha inválidos.');
            }
        })
        .catch(err => {
            return reject(err);
        })

});

SessionServices.validate = (token, userId) => new Promise((resolve, reject) => {
    Session.findOne({
            where: {
                token: token,
                userId: userId
            }
        })
        .then(session => {
            if (session) {
                User.findByPk(session.userId)
                    .then(user => {
                        return resolve(user);
                    })
            } else {
                return reject('Token inválido');
            }
        })
        .catch(err => {
            return reject(err);
        })
});

SessionServices.deactivate = (token, userId) => new Promise((resolve, reject) => {

    Session.findOne({
            where: {
                token: token,
                userId: userId
            }
        })
        .then(session => {
            if (session) {
                Session.destroy({
                        where: {
                            id: session.id
                        }
                    })
                    .then(removedSession => {
                        return resolve(removedSession);
                    })
            } else {
                return resolve(null);
            }

        })
        .catch(err => {
            return reject(err);
        })
});

module.exports = SessionServices;
