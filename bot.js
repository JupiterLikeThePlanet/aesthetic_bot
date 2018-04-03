var Twit = require("twit");
var TwitterBot = require("node-twitterbot").TwitterBot;



var Bot = new TwitterBot({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});


var firstPhraseArray = [
    "Yung",
    "シ",
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
    "Holographic",
    "V I S U A L",
    "PC",
    "Gradient",
    "Luxury",
    "Saint",
    "Cruise",
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
    "H Δ C K"
]


var secondPhraseArray = ["Sublime",
    "95",
    "VaͥƤoͣrͫ",
    "T W I L I G H T",
    "Wake",
    "84",
    "Digital",
    "V|H|S",
    "H O N G K O N G",
    "Ecstasy",
    "Beta",
    "ZENITH",
    "LEISURE",
    "Mall",
    "T I M E",
    "Disk",
    "Drive",
    "Nexus",
    "G0D",
    "lonely",
    " s a d ",
    "Crystal",
    "nobody",
    "Liquid",
    "Television",
    "a n y w h e r e",
    "n o w h e r e",
    "m e m o r y",
    "m e m o r i e s",
    "8-Bit",
    "d e p r e s s i o n",
    "Zeitgeist",
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
    "◤VαpØℝ◢"


];

var thirdPhraseArray = [
    "行チし",
    "ズ意の",
    "Pr0",
    "vibez",
    "88",
    "99",
    "u n i t",
    ".txt",
    "w a v e",
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
    "95",
    "84",
    "98",
    "Club",
    "WINZIP",
    ".mp3",
    ".mp4",
    "o n l i n e"

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


Bot.tweet(name);