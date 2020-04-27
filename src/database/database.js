const Sequelize = require('sequelize');

const connection = new Sequelize('ask_clone', 'root', '0000', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;