/*eslint-disable*/
const Home = require('../models/homeModel');
const factory = require('../controllers/handlerFactory')


exports.createHome = factory.createOne(Home)
exports.deleteHome = factory.deleteOne(Home)
exports.updateHome = factory.updateOne(Home)
exports.getHome = factory.getOne(Home)
exports.getHomes = factory.getAll(Home)
