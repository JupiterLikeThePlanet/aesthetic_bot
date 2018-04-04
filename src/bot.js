var Twit = require("twit");
var TwitterBot = require("node-twitterbot").TwitterBot;
const config = require('./config')

const vaporName = require('./vaporName')
const retweetVaporwave = require('./retweetVaporwave')

const Bot = new Twit(config)
// const Bot = new TwitterBot(config)



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

tweet(vaporName.name)


retweetVaporwave.retweet()



// var Bot = new TwitterBot({
//     // consumer_key: process.env.BOT_CONSUMER_KEY,
//     // consumer_secret: process.env.BOT_CONSUMER_SECRET,
//     // access_token: process.env.BOT_ACCESS_TOKEN,
//     // access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
// });



///////////////////// Search Tweets /////////////////////////////
var params = {
    q: 'vaporwave',
    count: 3
}

let retweet_pool = []

// GET TWEETS
Bot.get('search/tweets', params,searchedData);

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

function searchedData(err, data, response) {
    // console.log(data.statuses[0].text);
    // console.log(data.statuses);
    retweet_pool = data.statuses.map(hash =>({id: hash.id_str}))
    console.log('*************************************');
    console.log('retweet_pool');
    // console.log(retweet_pool);
    // console.log('retweet_pool[0]');
    // console.log(retweet_pool[0].id);
    console.log(retweet_pool)
    console.log('*************************************');
}

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













