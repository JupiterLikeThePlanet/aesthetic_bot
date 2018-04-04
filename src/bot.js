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


function getRandomGiphy(search_item) {
    var encodedSearchItem = encodeURIComponent(search_item);

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
getRandomGiphy("vhs");


gifArray = ["vaporwave", "retrowave", "80s", "aesthetic", "aesthetics", "glitch", "vhs", "vhs positive", "vhspositive", "vaporwave aesthetics", "aesthetic anime", "aesthetic design", "vaporwave anime"]

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


///// TWITTER BOT ACTIONS /////////////

//tweets vaporwave names
// tweet(vaporName.name)

//retweets anything with #vaporwave
// retweetVaporwave.retweet()
// add retrowave



// var Bot = new TwitterBot({
//     // consumer_key: process.env.BOT_CONSUMER_KEY,
//     // consumer_secret: process.env.BOT_CONSUMER_SECRET,
//     // access_token: process.env.BOT_ACCESS_TOKEN,
//     // access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
// });



///////////////////// Search Tweets /////////////////////////////
// var params = {
//     q: 'vaporwave',
//     count: 3
// }
//
// let retweet_pool = []

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

// function searchedData(err, data, response) {
//     // console.log(data.statuses[0].text);
//     // console.log(data.statuses);
//     retweet_pool = data.statuses.map(hash =>({id: hash.id_str}))
//     console.log('*************************************');
//     console.log('retweet_pool');
//     // console.log(retweet_pool);
//     // console.log('retweet_pool[0]');
//     // console.log(retweet_pool[0].id);
//     console.log(retweet_pool)
//     console.log('*************************************');
// }

// Bot.post('statuses/retweet/:id'), {
//     id: '981234870499332101'
// }, (err, data, response) => {
//     if (err) {
//         console.log("POST ERROR!")
//         console.log(err)
//     }else {
//         // console.log(`${data.text} retweet success`)
//     }
// }

// whatToRetweet = retweet_pool[0].id
// console.log(whatToRetweet)


///////////////////// Search Tweets /////////////////////////////


///////////////////// ReTweet /////////////////////////////
///works


///////////////////////////////////////////////////////////

// var retweet = function() {
//     var params = {
//         q: '#vaporwave',  // REQUIRED
//         result_type: 'recent',
//         lang: 'en'
//     }
//     // for more parametes, see: https://dev.twitter.com/rest/reference/get/search/tweets
//
//     Bot.get('search/tweets', params, function(err, data) {
//         // if there no errors
//         if (!err) {
//             // grab ID of tweet to retweet
//             var retweetId = data.statuses[0].id_str;
//             // Tell TWITTER to retweet
//             Bot.post('statuses/retweet/:id', {
//                 id: retweetId
//             }, function(err, data ,response) {
//                 if (response) {
//                     console.log(`${data.text} Retweeted!!!`);
//                 }
//                 // if there was an error while tweeting
//                 if (err) {
//                     console.log('Something went wrong while RETWEETING... Duplication maybe...');
//                 }
//             });
//         }
//         // if unable to Search a tweet
//         else {
//             console.log('Something went wrong while SEARCHING...');
//         }
//     });
// }

// retweet();













