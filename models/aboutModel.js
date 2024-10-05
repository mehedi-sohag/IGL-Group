/* eslint-disable */
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const About = sequelize.define('About', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  short_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  long_description: {
    type: DataTypes.TEXT, 
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
  imageCover: {
    type: DataTypes.JSON, 
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
  choose_us: {
    type: DataTypes.JSON, 
    allowNull: true,
    validate: {
      isArrayOfStrings(value) {
        if (value && !Array.isArray(value)) {
          throw new Error('Choose_us must be an array of strings');
        }
        if (value && !value.every(item => typeof item === 'string')) {
          throw new Error('Each choose_us item must be a string');
        }
      }
    }
   
  }
}, {
  timestamps: true, 
});


module.exports = About;
