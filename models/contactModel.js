/* eslint-disable */
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')



const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
   
  },
  
}, {
  timestamps: true,  
});


module.exports = Contact;
