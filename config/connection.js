const Sequelize = require('sequelize');

require('dotenv').config();
//const dotenv = require('dotenv');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

// const result = dotenv.config();

// if (result.error) {
//     throw result.error
// }

// console.log(result.parsed);

module.exports = sequelize;