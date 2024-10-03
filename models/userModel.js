/* eslint-disable */
const {  DataTypes } = require('sequelize');
const sequelize = require('../utils/database')
// const bcrypt = require('bcryptjs');


const User = sequelize.define('User', {
  _id: {
    type: DataTypes.UUID,  
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true 
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,

  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Please provide a password' },  
      len: {
        args: [8],
        msg: 'Password must be at least 8 characters long' 
      }
    },
    
  },
  passwordConfirm: {
    type: DataTypes.VIRTUAL, 
    allowNull: false,
    validate: {
      isEqual(value) {
        if (value !== this.password) {
          throw new Error('Passwords are not the same!');  
        }
      }
    }
  },
  passwordChangedAt: {
    type: DataTypes.DATE,
    allowNull:true,
  },
  passwordResetToken: {
    type: DataTypes.STRING,
    allowNull:true
  },
  passwordResetExpires: {
    type: DataTypes.DATE,
    allowNull:true
  }
}, {
  
  timestamps: true,
  // hooks: {
  
  //   beforeSave: async (user, options) => {
  //     if (user.password) {
  //       const salt = await bcrypt.genSalt(12);
  //       user.password = await bcrypt.hash(user.password, salt);
  //     }
  //   }
  // }
});


module.exports = User;
