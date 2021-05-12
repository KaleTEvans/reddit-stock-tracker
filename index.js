const r = require('./config/connection');
const fetch = require('node-fetch');

const wsbPosts = () => {
    (async () => {
        let data  = await r.getSubreddit('wallstreetbets').getHot().then(res => res.toJSON())
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
        console.log(post.title)
    })
}

module.exports = { wsbPosts };