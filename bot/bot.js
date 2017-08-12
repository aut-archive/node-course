const express = require('express')
const { ChatConnector, UniversalBot, Prompts, EntityRecognizer, ListStyle, Message } = require('botbuilder')

// Create HTTP server and start listening
const server = express()
server.listen(process.env.port || process.env.PORT || 3978, function () { })

