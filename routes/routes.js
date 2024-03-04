const express = require('express');
const router  = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', controllers.getStatus);
router.post('/books', controllers.createForm);

module.exports = router;