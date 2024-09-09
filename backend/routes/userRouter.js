const userCtrl = require('../controllers/userCtrl'); // Ensure the correct path
const auth = require('../middleware/auth')
const router = require('express').Router();

router.post('/register', userCtrl.register);
router.get('/refresh_token', userCtrl.refreshtoken);
router.post('/login', userCtrl.login);
router.get('/logout', userCtrl.logout);
router.get('/infor',auth, userCtrl.getUser);

module.exports = router;