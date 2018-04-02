// var Twit = require(‘twit’);
// var TwitterBot = require(‘node-twitterbot’).TwitterBot;
//
//
//
// var Bot = new TwitterBot({
//     consumer_key: process.env.BOT_CONSUMER_KEY,
//     consumer_secret: process.env.BOT_CONSUMER_SECRET,
//     access_token: process.env.BOT_ACCESS_TOKEN,
//     access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
// });


var firstPhraseArray = [
    "Yung",
    "行チし",
    "ズ意の",
    "媛へゑ",
    "Vape",
    "Mega",
    "Ultra",
    "Future",
    "V i r t u a l",
    "Macro",
    "Holographic",
    "V I S U A L",
    "PC",
    "Gradient",
    "Luxury",
    "Saint",
    "Cruise",
    "Power",
    "Night",
    "Neo",
    "Cyber",
    "Kid",
    "www.",
    "http://",
    "Dark",
    "__",
    "//",
    "Electric",
    "Giga"
]


var secondPhraseArray = [ "Sublimated",
    "Sublime",
    "95",
    "84",
    "Digital",
    "V|H|S",
    "Beta",
    "Mall",
    "Disk",
    "Drive",
    "Nexus",
    "lonely",
    "nobody",
    "a n y w h e r e",
    "n o w h e r e",
    "m e m o r y",
    "m e m o r i e s",
    "8-Bit",
    "Byte",
    "Windows",
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
    " p l u s ",
    " S Y S T E M ",
    " H O T L I N E ",
    "deluxe",
    "Plaza",
    "Consumer",
    "Beats",
    "Shop",
    "Echo",
    "Miami",
    "Nostalgia",
    "Pixel",
    "Glitch",
    "Play",
    "Moonlight",
    "Sleep",
    "A Q U A",
    "Future"


];

var thirdPhraseArray = [
    "行チし",
    "ズ意の",
    "88",
    "99",
    ".txt",
    "w a v e",
    ".exe",
    ".env",
    ".dmg",
    "媛へゑ",
    "流唄韻",
    "s o f t",
    "TRON",
    "RUNNER",
    "Arcade",
    "Racer",
    "Vice",
    "Pixels",
    ".net",
    "bot",
    ".com",
    "-scape",
    "Nights",
    "Futures"

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
        // console.log(first + " " + second + " " + third)
        console.log(vaporName)
        // return `{first} {second} {third}`
        return vaporName
    }


}



chooseRandom(firstPhraseArray, secondPhraseArray, thirdPhraseArray)