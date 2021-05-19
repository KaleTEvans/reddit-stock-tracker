// get reddit client info
require('dotenv').config();
const snoowrap = require('snoowrap');

const r = new snoowrap({
    userAgent: 'sentiment',
    clientId: process.env.DB_CLIENTID,
    clientSecret: process.env.DB_CLIENTSECRET,
    refreshToken: process.env.DB_REFRESHTOKEN
});

const fetch = require('node-fetch');
//const stocks = require('stock-ticker-symbol');
const { stocks } = require('./db/nyse.json');
const { findByTicker } = require('./utils/ticker-search');
// sentiment score
const Sentiment = require('sentiment');
const Ticker = require('./models/Ticker');
const sentiment = new Sentiment();

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
                let sentimentScore = sentiment.analyze(post.title);
                returnedPosts.push({
                    symbol: returnedTickers.Symbol,
                    company_name: returnedTickers['Company Name'],
                    reddit_title: post.title,
                    sentiment_score: sentimentScore.score
                })
            }
        })
    })
    // send the array to a fetch function to post to sql
    sqlUpload(returnedPosts);
}

const sqlUpload = stockObj => Ticker.bulkCreate(stockObj);
module.exports = { wsbPosts };