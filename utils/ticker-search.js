

const findByTicker = (string, tickers) => {
    // filter out symbols attached to string;
    if (string.includes('$')) {
        let newString = string.replace('$', '');
        const altResult = tickers.filter(ticker => ticker.Symbol === newString.trim())[0];
        return altResult;
    }
    if (string.includes('(')) {
        let newString = string.replace('(', '');
        let altString = newString.replace(')', '');
        const altResult = tickers.filter(ticker => ticker.Symbol === altString.trim())[0];
        return altResult;
    }
    const result = tickers.filter(ticker => ticker.Symbol === string)[0];
    return result;
}

module.exports = { findByTicker };