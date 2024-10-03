/* eslint-disable */
const mysql = require('mysql2')
require('dotenv').config()


process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});


const app = require('./app');
const sequelize = require('./utils/database');


const port = process.env.PORT || 3000;


sequelize.authenticate().then(()=>console.log('Connection has been established successfully.')).catch((err)=>console.log('Unable to connect to the database',err))
sequelize.sync({alter:true}).then(()=>console.log('database and table sync')).catch((err)=>console.log(err))

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

