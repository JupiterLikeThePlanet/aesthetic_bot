require("./src/bot.js")

const Twit = require('twit')
const config = require('./src/config')
const vaporName = require('./src/vaporName')

const Bot = new Twit(config)