console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config')
var Bot = new Twit(config);

var stream = Bot.stream('user');
stream.on('follow',followed);

function followed(eventMsg){
    console.log('Follow event');
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    Bot.post('friendships/create', {
            screen_name: screenName
        }, (err, data, response) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
        }
    });

    tweetMessage('@'+screenName+" s a d || b o y s love company. Thanks for the follow.")
}

function tweetMessage(txt) {

    var tweet = {
        status: txt
    }

    Bot.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went wrong!");
        }
        else {
            console.log("Voila It worked!");
        }
    }
}