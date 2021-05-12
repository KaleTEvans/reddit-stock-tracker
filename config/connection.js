require('dotenv').config();
const snoowrap = require('snoowrap');
//const dotenv = require('dotenv');

const r = new snoowrap({
    userAgent: 'sentiment',
    clientId: process.env.DB_CLIENTID,
    clientSecret: process.env.DB_CLIENTSECRET,
    refreshToken: process.env.DB_REFRESHTOKEN
});

// const result = dotenv.config();

// if (result.error) {
//     throw result.error
// }

// console.log(result.parsed);

module.exports = r;