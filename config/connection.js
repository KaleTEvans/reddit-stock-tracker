const Sequelize = require('sequelize');

require('dotenv').config();
const snoowrap = require('snoowrap');
//const dotenv = require('dotenv');

const r = new snoowrap({
    userAgent: 'sentiment',
    clientId: process.env.DB_CLIENTID,
    clientSecret: process.env.DB_CLIENTSECRET,
    refreshToken: process.env.DB_REFRESHTOKEN
});

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

module.exports = r, sequelize;