/* eslint-disable */
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')



const Contact = sequelize.define('Contact', {
    _id: {
        type: DataTypes.UUID,  
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true 
      },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: { msg: 'A contact must have an email' }, 
      notEmpty: { msg: 'A contact must have an email' },
      isEmail: { msg: 'Please provide a valid email address' } 
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  
}, {
  timestamps: true,  
});


module.exports = Contact;
