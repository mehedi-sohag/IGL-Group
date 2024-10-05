/*eslint-disable*/

const express =  require('express');
const navController = require('../controllers/navController')
const router = express.Router();

router.route('/api/v1/navigations').get(navController.getNavs).post(navController.createNav);
router.route('/api/v1/navigation/:id').delete(navController.deleteNav).patch(navController.updateNav).get(navController.getNav)





module.exports = router;