/* eslint-disable */
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const About = sequelize.define('About', {
  _id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  short_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  long_description: {
    type: DataTypes.TEXT, // Changed from STRING to TEXT
    allowNull: false,
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
  imageCover: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  choose_us: {
    type: DataTypes.JSON, // Changed from ARRAY to JSON
    allowNull: true,
    // Similar validation as images
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
  timestamps: true, // Sequelize will automatically manage createdAt and updatedAt
});

// Export the About model
module.exports = About;
