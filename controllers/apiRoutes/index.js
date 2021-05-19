const router = require('express').Router();
const redditRoutes = require('./redditRoutes');
const stockRoutes = require('./stockRoutes');

router.use(redditRoutes);
router.use(stockRoutes);

module.exports = router;