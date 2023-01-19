const express = require('express');

const blogController = require('../controllers/blog')

const storage = require('../helpers/storage');

const router = express.Router();

router.get('/', blogController.getBlog);

router.post('/', storage, blogController.posBlog);

module.exports = router;