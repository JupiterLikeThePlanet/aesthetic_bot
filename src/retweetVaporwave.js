var Twit = require("twit");
const config = require('./config')

const Bot = new Twit(config)


// module.exports = function(){
//     this.retweet =  function() {
//         var params = {
//             q: '#vaporwave',  // REQUIRED
//             result_type: 'recent',
//             lang: 'en'
//         }
//         // for more parametes, see: https://dev.twitter.com/rest/reference/get/search/tweets
//
//         Bot.get('search/tweets', params, function(err, data) {
//             // if there no errors
//             if (!err) {
//                 // grab ID of tweet to retweet
//                 var retweetId = data.statuses[0].id_str;
//                 // Tell TWITTER to retweet
//                 Bot.post('statuses/retweet/:id', {
//                     id: retweetId
//                 }, function(err, data ,response) {
//                     if (response) {
//                         console.log(`${data.text} Retweeted!!!`);
//                     }
//                     // if there was an error while tweeting
//                     if (err) {
//                         console.log('Something went wrong while RETWEETING... Duplication maybe...');
//                     }
//                 });
//             }
//             // if unable to Search a tweet
//             else {
//                 console.log('Something went wrong while SEARCHING...');
//             }
//         });
//     }
// }

var retweet = function() {
    // https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets   ||    https://dev.twitter.com/rest/reference/get/search/tweets

    var rtArray = ["popular", "recent", "mixed"]
    var rtLength = rtArray.length
    var random = Math.random() * (rtLength - 0) + 0
    var num = Math.floor(random)
    var rt = rtArray[num]

    console.log(`Going with result type: ${rt}`)

    var params = {
        q: '#vaporwave',  // REQUIRED
        result_type: rt, //can also use 'recent'
        lang: 'en'
    }

    Bot.get('search/tweets', params, function(err, data) {
        // if there no errors
        if (!err) {
            // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            // Tell TWITTER to retweet
            Bot.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, data ,response) {
                if (response) {
                    console.log(`${data.text} Retweeted!!!`);
                }
                // if there was an error while tweeting
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
                }
            });
        }
        // if unable to Search a tweet
        else {
            console.log('Something went wrong while SEARCHING...');
        }
    });
}

module.exports = ({
    retweet: retweet
})