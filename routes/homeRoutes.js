/*eslint-disable*/

const express =  require('express');
const homeController = require('../controllers/homeController')
const router = express.Router();

router.route('/api/v1/homes').get(homeController.getHomes).post(homeController.createHome);
router.route('/api/v1/home/:id').delete(homeController.deleteHome).patch(homeController.updateHome).get(homeController.getHome)





module.exports = router;