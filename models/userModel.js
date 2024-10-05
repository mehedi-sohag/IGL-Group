/* eslint-disable */

const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const sequelize = require('../utils/database')

class User extends Model {
  async correctPassword(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
  }

  changedPasswordAfter(JWTTimestamp) {
    if (this.passwordChangedAt) {
      const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
      return JWTTimestamp < changedTimestamp;
    }
    return false;
  }

  createPasswordResetToken() {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please tell us your name!',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      validate: {
        isEmail: {
          msg: 'Please provide a valid email',
        },
      },
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: 'default.jpg',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: 'Password must be at least 8 characters long',
        },
      },
    },
    passwordConfirm: {
      type: DataTypes.VIRTUAL,
      validate: {
        isSame(value) {
          if (value !== this.password) {
            throw new Error('Passwords are not the same!');
          }
        },
      },
    },
    passwordChangedAt: {
      type: DataTypes.DATE,
      allowNull:true,
    },
    passwordResetToken: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    passwordResetExpires: {
      type: DataTypes.DATE,
      allowNull:true
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    hooks: {
      beforeSave: async (user) => {
        if (!user.changed('password')) return;
        user.password = await bcrypt.hash(user.password, 12);
        user.passwordConfirm = null;
      },
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          user.passwordChangedAt = Date.now() - 1000; 
        }
      }
    },
    // defaultScope: {
    //   attributes: { exclude: ['password'] },
    // },
  }
);



module.exports = User;