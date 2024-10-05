/*eslint-disable*/

const express = require('express');
const authController = require('../controllers/authController')

const router = express.Router();

router.post('/api/v1/user/signup', authController.signup);
router.post('/api/v1/user/login', authController.login);
router.get('/api/v1/user/logout', authController.logout);
router.post('/api/v1/user/forgotPassword', authController.forgotPassword);
router.patch('/api/v1/user/resetPassword/:token', authController.resetPassword);
router.patch('/api/v1/user/updatePassword', authController.updatePassword);


module.exports = router;