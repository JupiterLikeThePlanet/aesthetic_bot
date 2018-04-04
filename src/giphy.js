var Twit = require("twit");

const request = require('request');
const config = require('./config');
const giphy = require('./giphy');

const Bot = new Twit(config)

module.exports = {
    getGiphy: function(search_item) {
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
    },


    getRandomGiphy: function() {
        var gifArray = ["vaporwave", "retrowave", "synthwave", "windows 95", "windows 98", "80s", "aesthetic", "aesthetics", "glitch", "vhs", "vhs positive", "vhspositive", "vaporwave aesthetics", "aesthetic anime", "aesthetic design", "vaporwave anime"]
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

            // this part to be refactored //////////////
            //  recfactor with this >>>> tweet(gif)
            Bot.post('statuses/update', {
                    status: gif
                }, (err, data, response) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`${data.text} tweeted!`)
                }
            })
            ///////// refactor this /////////////////////


        })
    }
}