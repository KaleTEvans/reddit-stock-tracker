const r = require('./config/connection');
const fetch = require('node-fetch');
//const stocks = require('stock-ticker-symbol');
const { stocks } = require('./db/nyse.json');
const { findByTicker } = require('./utils/ticker-search');

// array to hold posts with tickers
const returnedPosts = [];

const wsbPosts = () => {
    (async () => {
        let data  = await r.getSubreddit('wallstreetbets').getHot({limit: 100}).then(res => res.toJSON())
        return data;
    })()
    .then(data => {
        postDeconstructor(data);
    })
    .catch(err => {
        console.log(err);
    });
}

const postDeconstructor = data => {
    data.forEach(post => {
        let textArray = post.title.split(' ');
        textArray.forEach(word => {
            let returnedTickers = findByTicker(word, stocks);
            if (returnedTickers) {
                returnedPosts.push({
                    stockInfo: returnedTickers,
                    redditTitle: post.title
                })
            }
        })
    })
    console.log(returnedPosts);
}

module.exports = { wsbPosts };