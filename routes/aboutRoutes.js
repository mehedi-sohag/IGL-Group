/*eslint-disable*/

const express =  require('express');
const aboutController = require('../controllers/aboutController')
const router = express.Router();

router.route('/api/v1/abouts').get(aboutController.getAbouts).post(aboutController.createAbout);
router.route('/api/v1/about/:id').delete(aboutController.deleteAbout).patch(aboutController.updateAbout).get(aboutController.getAbout)





module.exports = router;