/*eslint-disable*/
const Gallery = require('../models/galleryModel');
const factory = require('../controllers/handlerFactory')


exports.createGallery = factory.createOne(Gallery)
exports.deleteGallery = factory.deleteOne(Gallery)
exports.updateGallery = factory.updateOne(Gallery)
exports.getGallery = factory.getOne(Gallery)
exports.getGalleries = factory.getAll(Gallery)
