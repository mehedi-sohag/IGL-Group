/*eslint-disable*/

const express =  require('express');
const galleryController = require('../controllers/galleryController')
const router = express.Router();

router.route('/api/v1/galleries').get(galleryController.getGalleries).post(galleryController.createGallery);
router.route('/api/v1/gallery/:id').delete(galleryController.deleteGallery).patch(galleryController.updateGallery).get(galleryController.getGallery)





module.exports = router;