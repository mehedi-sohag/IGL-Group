/*eslint-disable */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database')


const Home = sequelize.define('Home', {
    _id: {
        type: DataTypes.UUID,  
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true 
    },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'A title is required' },
      notEmpty: { msg: 'A title is required' }
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'A description is required' },
      notEmpty: { msg: 'A description is required' }
    }
  },
  imageCover: {
    type: DataTypes.STRING,
    allowNull: false
  },
  about_us: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logos: {
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


module.exports = Home;
