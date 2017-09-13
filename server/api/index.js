const router = require('express').Router();

// routes, routes, routes!

router.use('/twitter', require('./twitter'));

module.exports = router;
