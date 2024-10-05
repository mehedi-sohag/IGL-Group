/* eslint-disable */
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')


const Nav = sequelize.define('Nav', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true,  
  },
  subItems: {
    type: DataTypes.JSON, 
    allowNull: true,
    validate: {
      isArrayOfStrings(value) {
        if (value && !Array.isArray(value)) {
          throw new Error('Images must be an array of strings');
        }
        if (value && !value.every(item => typeof item === 'string')) {
          throw new Error('Each image must be a string');
        }
      }
    }
  },
  subItems_link: {
    type: DataTypes.JSON, 
    allowNull: true,
    validate: {
      isArrayOfStrings(value) {
        if (value && !Array.isArray(value)) {
          throw new Error('Images must be an array of strings');
        }
        if (value && !value.every(item => typeof item === 'string')) {
          throw new Error('Each image must be a string');
        }
      }
    }
  },
  
}, {
  timestamps: true  
});


module.exports = Nav;
