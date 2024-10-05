/*eslint-disable*/

const express =  require('express');
const contactController = require('../controllers/contactController')
const router = express.Router();

router.route('/api/v1/contacts').get(contactController.getContacts).post(contactController.createContact);
router.route('/api/v1/contact/:id').delete(contactController.deleteContact).patch(contactController.updateContact).get(contactController.getContact)





module.exports = router;