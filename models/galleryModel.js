/* eslint-disable */
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')


const Gallery = sequelize.define('Gallery', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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


module.exports = Gallery;
