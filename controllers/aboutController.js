/*eslint-disable*/
const About = require('../models/aboutModel');
const factory = require('../controllers/handlerFactory')


exports.createAbout = factory.createOne(About)
exports.deleteAbout = factory.deleteOne(About)
exports.updateAbout = factory.updateOne(About)
exports.getAbout = factory.getOne(About)
exports.getAbouts = factory.getAll(About)