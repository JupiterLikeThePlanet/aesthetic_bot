var Twit = require("twit");
var TwitterBot = require("node-twitterbot").TwitterBot;
const config = require('./config')

const Bot = new Twit(config)

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

var retweet_pool = []

// Bot.get('search/tweets', params,searchedData);

function searchedData(err, data, response) {
    // console.log(data.statuses[0].text);
    // console.log(data.statuses);
    retweet_pool = data.statuses.map(hash =>({id: hash.id}))
    console.log(retweet_pool);
    // console.log(retweet_pool[0].id);

    // Bot.retweet.twit.post('statuses/retweet/:id', { id: retweet_pool[0].id }, callback);
    // console.log(response);

    self.twit.post('statuses/retweet/:id', { id: retweet_pool[0].id }, callback);
}
///////////////////// Search Tweets /////////////////////////////


///////////////////// Retweets /////////////////////////////

Bot.retweet  = function (params, callback) {
    console.log("retweet!")
    var self = this;

    // self.twit.get('search/tweets', params, function (err, reply) {
    //     if(err) return callback(err);
    //
    //     var tweets = reply.statuses;
    //     // var randomTweet = randIndex(tweets);
    //
    //
    //     self.twit.post('statuses/retweet/:id', { id: retweet_pool[0].id }, callback);
    // });
    self.twit.get('search/tweets', params, searchedData)
};

Bot.retweet


var firstPhraseArray = [
    "Yung",
    "シ",
    "Melt",
    "i n t e r",
    "I N T R A",
    "行チし",
    "ズ意の",
    "媛へゑ",
    "Fresh",
    "Vape",
    "Mega",
    "Ultra",
    "Future",
    "V i r t u a l",
    "Macro",
    "Aquatic",
    "Holographic",
    "V I S U A L",
    "PC",
    "d e e p",
    "Gradient",
    "Luxury",
    "Saint",
    "Power",
    "Night",
    "u n t i t l e d",
    "Micro",
    "Neo",
    "Cyber",
    "Kid",
    "www.",
    "http://",
    "Dark",
    "__",
    "//",
    "Live",
    "Electric",
    "Giga",
    "Nostalgic",
    "Dystopia",
    "Euphoric",
    "Color",
    "Vapor",
    "サー",
    "でし",
    "はした",
    " の コ ン ",
    "Hyper",
    "LøRD",
    "ΔCID",
    "TE▲M",
    "Waking",
    "s l o w",
    "L A T E",
    "M I N D",
    "Full",
    "Double",
    "Twin",
    "High",
    "Midnight",
    "D E S O L A T E",
    "S T A R",
    "Digital",
    "Cool",
    "Distorted",
    "Eternal",
    "Contemporary",
    "Sublime",
    "T E E N",
]


var secondPhraseArray = [
    "95",
    "Terminal",
    "VaͥƤoͣrͫ",
    "Trash",
    "Fuji",
    "G A M E",
    " d e a t h ",
    "Duality",
    "Cruise",
    "Time",
    "d a t a",
    "p a r a d i s e",
    "CITY",
    "Quest",
    "T W I L I G H T",
    "Wake",
    "84",
    "Digital",
    "V|H|S",
    "H O N G K O N G",
    "Ecstasy",
    "Mystique",
    "b e a c h",
    "Beta",
    "ZENITH",
    "LEISURE",
    "H Δ C K",
    "Mall",
    "Cloud",
    "T I M E",
    "Disk",
    "Drive",
    "Nexus",
    "Insecurity",
    "Vogue",
    "Obsession",
    "G0D",
    "lonely",
    " s a d ",
    "Crystal",
    "nobody",
    "Messenger",
    "Liquid",
    "Television",
    "a n y w h e r e",
    "n o w h e r e",
    "m e m o r y",
    "m e m o r i e s",
    "8-Bit",
    "d e p r e s s i o n",
    "Zeitgeist",
    "Vision",
    "Byte",
    "Windows",
    "Continuum",
    "Future",
    "Internet",
    "Is Dead",
    "Quality",
    "Dreams",
    "Overflow",
    "Catalogue",
    "Vape",
    "Reality",
    "V i r t u a l",
    "L o n e l i n e s s",
    "A L O N E",
    "N E O N",
    "Corp",
    "Corporate",
    "e x i s t",
    "Existence",
    "Why?",
    "E R R O R",
    "CTRL",
    "Thrifty",
    "GameBoy",
    "Cassette",
    "Macintosh",
    "Analog",
    "Software",
    "Coke",
    "Pepsi",
    "Floral",
    "E T H E R",
    "K E Y W O R D",
    " S Y S T E M ",
    " H O T L I N E ",
    "deluxe",
    "Plaza",
    "Consumer",
    "Beats",
    "Shop",
    "Echo",
    "Miami",
    "†Ɍïɭɭ",
    "Nostalgia",
    "Pixel",
    "Glitch",
    "SAMSUNG",
    "CVLT",
    "Play",
    "Moonlight",
    "Sleep",
    "escape",
    "A Q U A",
    "Future",
    "A U D I O",
    "C A P I T A L I S T",
    "T O K Y O",
    "☯TEK☯",
    "◤VαpØℝ◢",
    "m o o d",
    "A L O N E",
    "Temptation",
    "O A S I S",
    "bit",
    "Beijing"


];

var thirdPhraseArray = [
    "行チし",
    "ズ意の",
    "Pr0",
    "C0RE",
    "vibez",
    "88",
    "99",
    "u n i t",
    ".txt",
    "w a v e",
    "s c a n",
    "98",
    ".exe",
    ".env",
    "SQUΛD",
    ".dmg",
    "媛へゑ",
    "流唄韻",
    "s o f t",
    "TRON",
    "RUNNER",
    "Arcade",
    "Racer",
    "Vice",
    ".rar",
    "Pixels",
    ".net",
    "bot",
    "tapes",
    ".com",
    "-scape",
    "b o i",
    "Nights",
    "Futures",
    "jam",
    "jams",
    "でした",
    "最高で",
    ".biz",
    "n e t",
    "95",
    "84",
    "Club",
    "WINZIP",
    ".mp3",
    ".mp4",
    "64",
    "o n l i n e",
    " p l u s "

]


function chooseRandom(firstPhraseArray, secondPhraseArray, thirdPhraseArray) {

    var vaporName = "";

    var first = Math.floor(Math.random()*2)

    var third = Math.floor(Math.random()*2)

    if (first) {
        first = firstPhraseArray[Math.floor(Math.random() * firstPhraseArray.length)];
    } else {
        first = ""
    }

    if (third) {
        third = thirdPhraseArray[Math.floor(Math.random() * thirdPhraseArray.length)];
    } else {
        third = ""
    }

    var second = secondPhraseArray[Math.floor(Math.random() * secondPhraseArray.length)];

    if (first === ""  && third === ""){
        let secondSecond = secondPhraseArray[Math.floor(Math.random() * secondPhraseArray.length)]

        vaporName = second + " " + secondSecond
        console.log(vaporName)

        return vaporName
    }else {
        // console.log(`{first} {second} {third}`)
        vaporName = first + " " + second + " " + third
        console.log(vaporName) // return `{first} {second} {third}`
        return vaporName
    }
}



var name = chooseRandom(firstPhraseArray, secondPhraseArray, thirdPhraseArray)


// Bot.tweet(name);