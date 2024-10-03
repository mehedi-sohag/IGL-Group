/* eslint-disable */
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')


const Nav = sequelize.define('Nav', {
   _id: {
      type: DataTypes.UUID,  
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true 
    },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  subItems: {
    type: DataTypes.JSON, // Changed from ARRAY to JSON
    allowNull: true,
    // You can add validation to ensure it's an array of strings
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
    type: DataTypes.JSON, // Changed from ARRAY to JSON
    allowNull: true,
    // You can add validation to ensure it's an array of strings
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
