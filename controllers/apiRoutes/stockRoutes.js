const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const { stocks } = require('../../db/nyse.json');

router.get('/stocks', (req, res) => {
    let results = stocks;
    res.json(results);
});

// find a stock by a ticker
router.get('/stocks/:id', (req, res) => {
    const result = stocks.filter(stock => stock.Symbol === req.params.id)[0];
    if (!result) {
        console.log('No ticker found');
        return;
    }
    res.json(result);
})

// route to post new stocks to the db
/* Format:
    "Company Name": 
    "Symbol": 
*/
router.post('/stocks', (req, res) => {
    // set id to next index
    req.body.id = stocks.length.toString();

    const stock = req.body;
    stocks.push(stock);
    fs.writeFileSync(
        path.join(__dirname, '../../db/nyse.json'),
        JSON.stringify({ stocks: stocks }, null, 2)
    )

    res.json(stock);
});

module.exports = router;