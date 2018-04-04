require("./src/bot.js")
require("./src/stream.js")

const Twit = require('twit')
const config = require('./src/config')
const stream = require('./src/stream')
const vaporName = require('./src/vaporName')
const retweetVaporwave = require('./src/retweetVaporwave')

const Bot = new Twit(config)