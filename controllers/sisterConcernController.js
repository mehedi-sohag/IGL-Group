/*eslint-disable*/
const Sister = require('../models/sisterConcernModel');
const factory = require('../controllers/handlerFactory')


exports.createSister = factory.createOne(Sister)
exports.deleteSister = factory.deleteOne(Sister)
exports.updateSister = factory.updateOne(Sister)
exports.getSister = factory.getOne(Sister)
exports.getSisters = factory.getAll(Sister)
