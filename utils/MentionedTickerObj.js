const Sentiment = require('sentiment');

class MentionedTicker {
    constructor(stockInfo, redditInfo, sentiment) {
        this.stockInfo = stockInfo;
        this.redditInfo = redditInfo;
        this.sentiment = sentiment;

        this.ticker = this.stockInfo.Symbol
        this.company = this.stockInfo.companyName
        this.redditTitle = this.redditInfo.title
        this.redditURL = this.redditInfo.url
    }
}

module.exports = MentionedTicker;