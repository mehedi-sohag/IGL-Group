/* eslint-disable */
const {DataTypes } = require('sequelize');
const sequelize = require('../utils/database');


const Sister = sequelize.define('Sister', {
    _id: {
        type: DataTypes.UUID,  
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true 
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    short_description: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    long_description: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
   
  }, {
   
    timestamps: true,
  });
  
  module.exports = Sister;