var Twit = require("twit");
var TwitterBot = require("node-twitterbot").TwitterBot;

const request = require('request');
const config = require('./config');
const vaporName = require('./vaporName');
const retweetVaporwave = require('./retweetVaporwave');

const Bot = new Twit(config)
// const Bot = new TwitterBot(config)

// FUNCTIONS /////////////////////////
function tweet(txt) {
    Bot.post('statuses/update', {
        status: txt
    }, (err, data, response) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`${data.text} tweeted!`)
    }
})
}

function getGiphy(search_item) {
    var encodedSearchItem = encodeURIComponent(search_item);

    var requestURL = 'http://api.giphy.com/v1/gifs/search?q=' + encodedSearchItem + '&api_key=' + process.env.GIPHY_API
    // var requestURL = 'http://api.giphy.com/v1/gifs/random?api_key=' + process.env.GIPHY_API + "&tag=" + encodedSearchItem

    const parameters = {
        url: requestURL,
        encoding: 'binary'
    }

    request.get(parameters, (err, respone, body) => {
        body = JSON.parse(body)
        console.log("********************body************")
        var bodyDataLength = body.data.length
        var random = Math.random() * (bodyDataLength - 0) + 0
        var num = Math.floor(random)
        //
        var gif = body.data[num].bitly_url
        tweet(gif)
    })
}


function getRandomGiphy() {
    var gifArray = ["vaporwave", "retrowave", "80s", "aesthetic", "aesthetics", "glitch", "vhs", "vhs positive", "vhspositive", "vaporwave aesthetics", "aesthetic anime", "aesthetic design", "vaporwave anime"]
    var gifArrayLength = gifArray.length
    var random = Math.random() * (gifArrayLength - 0) + 0
    var num = Math.floor(random)
    var searchItem = gifArray[num]

    console.log(searchItem)

    var encodedSearchItem = encodeURIComponent(searchItem);

    var requestURL = 'http://api.giphy.com/v1/gifs/random?api_key=' + process.env.GIPHY_API + "&tag=" + encodedSearchItem

    const parameters = {
        url: requestURL,
        encoding: 'binary'
    }

    request.get(parameters, (err, respone, body) => {
        body = JSON.parse(body)
        let gif = body.data.bitly_gif_url
        tweet(gif)
    })
}

// getRandomGiphy("retrowave");

// getGiphy("vaporwave")

// getGiphy("retrowave");
//
// getGiphy("80s");
//
// getGiphy("aesthetic");
//
// getGiphy("aesthetics");
//
// getGiphy("glitch");
//

//hourly
// var minute = setInterval(getRandomGiphy, 1000 * 60 * 60)
// var minute = setInterval(getRandomGiphy, 1000 * 10)
// minute
//
// // var glitch = getGiphy("glitch")
// var seconds = setInterval(getGiphy, 1000 * 10)
// seconds

// getRandomGiphy();



// gifArray = ["vaporwave", "retrowave", "80s", "aesthetic", "aesthetics", "glitch", "vhs", "vhs positive", "vhspositive", "vaporwave aesthetics", "aesthetic anime", "aesthetic design", "vaporwave anime"]

// const giphy = {
//     baseURL: "https://api.giphy.com/v1/gifs/",
//     key: "dc6zaTOxFJmzC",
//     tag: "fail",
//     type: "random",
//     rating: "pg-13"
// };
//
// let giphyURL = encodeURI(
//     giphy.baseURL +
//     giphy.type +
//     "?api_key=" +
//     giphy.key +
//     "&tag=" +
//     giphy.tag +
//     "&rating=" +
//     giphy.rating
// );

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///// TWITTER BOT ACTIONS /////////////////////////////////////

//tweets vaporwave names
tweet(vaporName.name)

//retweets anything with #vaporwave
retweetVaporwave.retweet()
// add retrowave

getRandomGiphy()


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////




// var Bot = new TwitterBot({
//     // consumer_key: process.env.BOT_CONSUMER_KEY,
//     // consumer_secret: process.env.BOT_CONSUMER_SECRET,
//     // access_token: process.env.BOT_ACCESS_TOKEN,
//     // access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
// });



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////// Search Tweets /////////////////////////////
// var params = {
//     q: 'vaporwave',
//     count: 3
// }
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////// Basic Actions //////////////////////////////////////////

// GET TWEETS
// Bot.get('search/tweets', params,searchedData);

// POST TWEETS
// Bot.post('statuses/retweet/:id', {
//     id: '981234870499332101'
// }, (err, data, response) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(`${data.text} retweet success!`)
//     }
// })
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////















