/*eslint-disable*/
const Contact = require('../models/contactModel');
const factory = require('../controllers/handlerFactory')


exports.createContact = factory.createOne(Contact)
exports.deleteContact = factory.deleteOne(Contact)
exports.updateContact = factory.updateOne(Contact)
exports.getContact = factory.getOne(Contact)
exports.getContacts = factory.getAll(Contact)
