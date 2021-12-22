const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')
router.get('/',navigationController.getHome)
router.post('/',navigationController.getHome)
module.exports = router;