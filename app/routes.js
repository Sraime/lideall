const express = require('express')
const router = express.Router()
const defaultController = require('./controllers/default_controller');

router.get('/', defaultController.homepage);

module.exports = router