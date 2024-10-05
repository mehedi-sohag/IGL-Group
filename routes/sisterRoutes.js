/*eslint-disable*/

const express =  require('express');
const sisterConcernController = require('../controllers/sisterConcernController')
const router = express.Router();

router.route('/api/v1/sister-concerns').get(sisterConcernController.getSister).post(sisterConcernController.createSister);
router.route('/api/v1/sister-concern/:id').delete(sisterConcernController.deleteSister).patch(sisterConcernController.updateSister).get(sisterConcernController.getSister)





module.exports = router;