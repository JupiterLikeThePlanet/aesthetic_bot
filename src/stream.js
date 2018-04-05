var Twit = require('twit');
var config = require('./config')
const redis = require('redis');

// var url = require('url');
// var redisURL = url.parse(process.env.REDISCLOUD_URL || 'redis://127.0.0.1:6379');
// var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
// if (process.env.REDISCLOUD_URL) {
//     client.auth(redisURL.auth.split(":")[1]);
// }



var Bot = new Twit(config);

var stream = Bot.stream('user');

stream.on('follow',followed);

////////////////////////////////////////////////////////////////////
// stream.on('disconnect', function (disconnectMessage) {
//     console.log(disconnectMessage);
// });
//
// stream.on('reconnect', function (request, response, connectInterval) {
//     console.log('Reconnecting in ' + connectInterval + 'ms...');
// })
//
// stream.on('error', function(error) {
//     console.log(error);
// });
////////////////////////////////////////////////////////////////////
function followed(eventMsg){
    console.log('Follow event');
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;

    // console.log("******************** event msg *****************")
    // console.log(eventMsg)
    // console.log("******************** event msg . source *****************")
    // console.log(eventMsg.source.id_str)
    // console.log("******************** *****************")

    // if(screenName === '@AestheticBot95'){
    //
    // }else{
    //
    //     Bot.post('friendships/create', {
    //             screen_name: screenName
    //         }, (err, data, response) => {
    //             if (err) {
    //                 console.log(err)
    //             } else {
    //                 console.log(data)
    //         }
    //     });
    //
    // }

    // if(screenName === '@AestheticBot95'){


        Bot.post('friendships/create', {
            screen_name: screenName
        }, (err, data, response) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
        }
    });

    // }


    tweetMessage('@'+screenName+" s a d || b o y s love company. Thanks for the follow.")
}

function tweetMessage(txt) {

    //refactor this
    if(txt !== '@AestheticBot95 s a d || b o y s love company. Thanks for the follow.' ) {
        var tweet = {
            status: txt
        }
    }else{
        var tweet = {
            status: "My //l o n e l y// world grows less //l o n e l y//"
        }
    }

    Bot.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went wrong!");
            console.log(err);
            console.log("*********************************");
        }
        else {
            console.log("Voila It worked!");
        }
    }
}



/////////////////////////////////////////////////////////

// var T = new Twit(config);
//
// var stream = T.stream('statuses/filter', { track: 'vaporwave' });
//
// stream.on('tweet', function (tweet) {
//     console.log(tweet.text);
// });
//
// stream.on('limit', function (limitMessage) {
//     console.log(limitMessage);
// });
//
// stream.on('disconnect', function (disconnectMessage) {
//     console.log(disconnectMessage);
// });
//
// stream.on('reconnect', function (request, response, connectInterval) {
//     console.log('Reconnecting in ' + connectInterval + 'ms...');
// })
//
// stream.on('error', function(error) {
//     console.log(error);
// });

// module.exports