/* eslint-disable */
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')


const Gallery = sequelize.define('Gallery', {
    _id: {
        type: DataTypes.UUID,  
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true 
      },
  imageCover: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'A gallery must have an image cover' },
      notEmpty: { msg: 'A gallery must have an image cover' }
    }
  },
  images: {
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


module.exports = Gallery;
