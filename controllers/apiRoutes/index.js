const router = require('express').Router();

const redditRoutes = require('./redditRoutes');
const stockRoutes = require('./stockRoutes');
const tickerRoutes = require('./ticker-routes');

router.use('/reddit', redditRoutes);
router.use('/stocks', stockRoutes);
router.use('/tickers', tickerRoutes)

module.exports = router;