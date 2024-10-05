/*eslint-disable*/
const User = require('../models/userModel');
const factory = require('../controllers/handlerFactory')


exports.createAbout = factory.createOne(Contact)
exports.deleteAbout = factory.deleteOne(Contact)
exports.updateAbout = factory.updateOne(Contact)
exports.getAbout = factory.getOne(Contact)
exports.getAbouts = factory.getAll(Contact)
