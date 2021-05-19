
const routes = require('./controllers/');
const sequelize = require('./config/connection');
//const htmlRoutes = require('./routes/htmlRoutes');
const { wsbPosts } = require('./index');
// const { nyseData } = require('./db/nyse');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// instruct the server to make all public files readily available
app.use(express.static('public'));

app.use(routes);
//app.use('/', htmlRoutes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
    wsbPosts();
  });