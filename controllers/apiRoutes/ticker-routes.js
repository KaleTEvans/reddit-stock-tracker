const router = require('express').Router();
const { Ticker } = require('../../models/Ticker');

// get all tickers
router.get('/', (req, res) => {
    Ticker.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;