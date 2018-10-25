const knexfile  = require('../knexfile');
const knex      = require('knex')(knexfile);
module.exports  = knex

knex('users').insert({
    name: 'Teste',
    email: 'teste@gmail.com',
    password: 'teste'
}).then(data => console.log(data))