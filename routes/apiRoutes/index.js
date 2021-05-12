const router = require('express').Router();
const redditRoutes = require('./redditRoutes');

router.use(redditRoutes);

module.exports = router;