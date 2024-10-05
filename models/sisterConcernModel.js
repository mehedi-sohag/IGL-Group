/* eslint-disable */
const {DataTypes } = require('sequelize');
const sequelize = require('../utils/database');


const Sister = sequelize.define('Sister', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    short_description: {
      type: DataTypes.STRING,
      allowNull: true,
     
    },
    long_description: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
   
  }, {
   
    timestamps: true,
  });
  
  module.exports = Sister;