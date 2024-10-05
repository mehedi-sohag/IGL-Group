/*eslint-disable*/
const Nav = require('../models/navModel');
const factory = require('../controllers/handlerFactory')


exports.createNav = factory.createOne(Nav)
exports.deleteNav = factory.deleteOne(Nav)
exports.updateNav = factory.updateOne(Nav)
exports.getNav = factory.getOne(Nav)
exports.getNavs = factory.getAll(Nav)
