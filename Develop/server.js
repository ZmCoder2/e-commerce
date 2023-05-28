const express = require('express');
const routes = require('./routes');
const mysql = require('mysql2')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db =mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
})

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
