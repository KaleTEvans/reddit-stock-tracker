const router = require('express').Router();
const { sequelize } = require('../../models/Ticker');
const Ticker = require('../../models/Ticker');

// get all tickers
router.get('/', (req, res) => {
    Ticker.findAll({
        attributes: [
            'id',
            'symbol',
            'company_name',
            'reddit_title',
            'sentiment_score'
        ]
    })
    .then(dbStockData => res.json(dbStockData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// determine the frequency each ticker has appeared at
router.get('/count', (req, res) => {
    Ticker.findAll({
        attributes: [
            'symbol',
            'company_name',
            [sequelize.fn('COUNT', sequelize.col('symbol')), 'Mentions'],
            [sequelize.fn('SUM', sequelize.col('sentiment_score')), 'Sentiment'],
        ],
        group: ['symbol'],
        order: [[sequelize.literal('Mentions'), 'DESC']]
    })
    .then(dbStockData => res.json(dbStockData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post the tickers to the db
router.post('/', (req, res) => {
    Ticker.create({
        symbol: req.body.symbol,
        company_name: req.body.company_name,
        reddit_title: req.body.reddit_title,
        sentiment_score: req.body.sentiment_score
    })
    .then(dbTickerData => res.json(dbTickerData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;