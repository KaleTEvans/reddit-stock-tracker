const fetch = require('node-fetch');
const r = require('../../config/connection');
const router = require('express').Router();
const snoowrap = require('snoowrap');

// wsb subreddit page
router.get('/', (req, res) => {
    r.getSubreddit('wallstreetbets').getHot().then(res => res.toJSON())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        console.log(err);
    });
});

// may attempt later to obtain comments from each post
// router.get('/reddit/comments', (req, res) => {
//     r.getSubmission('t5_2th52').expandReplies({limit: 100, depth: 100}).then(res => res.toJSON())
//     .then(data => {
//         res.send({ data });
//     })
//     .catch(err => {
//         console.log(err);
//     })
// });

module.exports = router;