# Reddit Stock Search

## Description
This is a back-end application with the purpose of searching through the "WallStreetBets" subreddit page to gather data on stocks being talked about. As of right now,
it scans through the titles of each post in the "hot" category and references ticker mentions whith a stock database which can be found in this repository. The app also
uses a sentiment engine to measure the sentiment of each post title containing a stock. The sorted data is then uploaded to a mySQL database for use in other applications.

## Future Additions
* Scan through post text and comments on top of just titles
* Search for full company names rather than just ticker symbols
* Update the sentiment engine to understand reddit lingo a lot better (it's very inaccurate right now)
* Allow for continued scanning of reddit and updating the database rather than just when the server is started

## Software Used
* JavaScript
* Node.Js
* MySQL (via Sequelize)

## Images 
![](./images/table.jpg)<br />

## Contact
* Email: kaletevans@gmail.com