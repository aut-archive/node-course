const express = require('express')
const { ChatConnector, UniversalBot, Prompts, EntityRecognizer, ListStyle, Message } = require('botbuilder')

// Create HTTP server and start listening
const server = express()
server.listen(process.env.port || process.env.PORT || 3978, function () { })

// Create the chat connector for communicating with the Bot Framework Service
const connector = new ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
})

// Listen for messages from users 
server.post('/api/messages', connector.listen())

