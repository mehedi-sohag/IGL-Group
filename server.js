/* eslint-disable */

const mysql = require('mysql2')
require('dotenv').config()

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./app');

const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) return console.error(err.message);

  console.log('Connected to the MySQL server.');
});

// to create a todos table
// const createTodosTable = `create table if not exists todos(
//   id int primary key auto_increment,
//   title varchar(255) not null,
//   completed bool not null default false
// )`;

  // insert statment
  // const insertRow = `insert into todos(title,completed)
  //          values('Learn mongoDB',true),('Learn mysql',true)`;

// connection.query(createTodosTable, function (err) {
//   if (err) return console.error(err.message);
//   console.log(results);
//   console.log(fields);

// });

// select statement
// const query = `select * from todos`

// update statement
// const query = `update todos set title = 'Learn Node.js' where id = 1`

// delete statement
// const query = `delete from todos where id = 1`



connection.query(query,function(err,results,fields){
  if(err) return console.error(err.message);
  console.log(results);
})


const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});







process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

