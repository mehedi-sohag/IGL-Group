/*eslint-disable*/
const {Sequelize} = require('sequelize');

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

const db = new Sequelize(database,user,password,{
    host: host,
    dialect: 'mysql',
  
  })

  module.exports = db;