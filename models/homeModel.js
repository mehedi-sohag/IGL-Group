/*eslint-disable */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database')


const Home = sequelize.define('Home', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imageCover: {
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
  about_us: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  images: {
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


module.exports = Home;
