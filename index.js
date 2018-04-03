require("./src/bot.js")

const Twit = require('twit')
const config = require('./src/config')

const Bot = new Twit(config)