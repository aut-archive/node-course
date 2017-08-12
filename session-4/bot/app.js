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

// Create your bot with a function to receive messages from the user
const bot = new UniversalBot(connector, session => {
    // echo the user's message
    // session.send("You said: %s", session.message.text);

    // session.send(JSON.stringify(session.userData.address.user.name))

    // session.send({
    //     text: 'Salam',
    //     attachments:[
    //         {
    //             contentType: 'image/jpg',
    //             contentUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
    //         }
    //     ]
    // })
})

// -----------------------------------------

// bot.dialog('greetings', [
//     // Step 1
//     (session) => {
//         Prompts.text(session, 'Hi! What is your name?')
//     },
//     // Step 2
//     (session, results) => {
//         session.endDialog('Hello %s!', results.response)
//     }
// ])

// -----------------------------------------

// bot.dialog('reserve', [
//     (session) => {
//         session.send("Welcome to the dinner reservation.")
//         Prompts.time(session, "Please provide a reservation date and time (e.g.: June 6th at 5pm)")
//     },
//     (session, results) => {
//         session.dialogData.reservationDate = EntityRecognizer.resolveTime([results.response])
//         Prompts.text(session, "How many people are in your party?")
//     },
//     (session, results) => {
//         session.dialogData.partySize = results.response
//         Prompts.text(session, "Who's name will this reservation be under?")
//     },
//     (session, results) => {
//         session.dialogData.reservationName = results.response

//         // Process request and display reservation details
//         session.send("Reservation confirmed. Reservation details: <br/>Date/Time: %s <br/>Party size: %s <br/>Reservation name: %s",
//             session.dialogData.reservationDate, session.dialogData.partySize, session.dialogData.reservationName)
//         session.endDialog()
//     }
// ])

// -----------------------------------------

// bot.dialog('greetingsWithName', [
//     (session) => {
//         session.beginDialog('askName')
//     },
//     (session, results) => {
//         session.endDialog('Hello %s!', results.response)
//     }
// ])

// bot.dialog('askName', [
//     (session) => {
//         Prompts.text(session, 'Hi! What is your name?')
//     },
//     (session, results) => {
//         session.endDialogWithResult(results)
//     }
// ])

// -----------------------------------------

// bot.dialog('profile', [
//     (session) => {
//         session.beginDialog('ensureProfile', session.userData.profile)
//     },
//     (session, results) => {
//         // Save user profile.
//         // session.userData.profile = results.response

//         session.send('Hello %(name)s! I love %(company)s!', session.userData.profile)
//     }
// ])

// bot.dialog('ensureProfile', [
//     (session, args, next) => {
//         // Set the profile or create the object.
//         session.dialogData.profile = args || {}

//         if (!session.dialogData.profile.name) {
//             Prompts.text(session, "What's your name?")
//         } else {
//             // Skip if we already have this info.
//             next()
//         }
//     },
//     (session, results, next) => {
//         if (results.response) {
//             // Save user's name if we asked for it.
//             session.dialogData.profile.name = results.response
//         }
//         if (!session.dialogData.profile.company) {
//             Prompts.text(session, "What company do you work for?")
//         } else {
//             next() // Skip if we already have this info.
//         }
//     },
//     (session, results) => {
//         if (results.response) {
//             // Save company name if we asked for it.
//             session.dialogData.profile.company = results.response
//         }
//         session.endDialogWithResult({ response: session.dialogData.profile })
//     }
// ])

// -----------------------------------------

// bot.dialog('select', [
//     (session) => {
//         Prompts.choice(session,'Select:', [
//             'Option 1',
//             'Option 2'
//         ], ListStyle.auto)
//     },
//     (session, results) => {
//         session.send(results.response.entity)
//         session.endDialog()
//     }
// ])

// -----------------------------------------

// bot.dialog('foo', (session) => {
//     session.send('Bar!')
//     session.endDialog()
// }).triggerAction({
//     matches: /baz/,
//     confirmPrompt: 'FooBAZ??'
// })

// -----------------------------------------

// This dialog prompts the user for a phone number. 
// It will re-prompt the user if the input does not match a pattern for phone number.
// bot.dialog('askPhone', [
//      (session, args) => {
//         if (args && args.reprompt) {
//             builder.Prompts.text(session, "Enter the number using a format of either: '(555) 123-4567' or '555-123-4567' or '5551234567'")
//         } else {
//             builder.Prompts.text(session, "What's your phone number?")
//         }
//     },
//     (session, results) => {
//         let matched = results.response.match(/\d+/g)
//         let number = matched ? matched.join('') : ''

//         if (number.length == 10 || number.length == 11) {
//             session.userData.phoneNumber = number // Save the number.
//             session.endDialogWithResult({ response: number })
//         } else {
//             // Repeat the dialog
//             session.replaceDialog('askPhone', { reprompt: true })
//         }
//     }
// ])

// -----------------------------------------
// Display the main menu and start a new request depending on user input.
// const menuItems = {
//     'a': 'Menu A',
//     'b': 'Menu B',
//     'c': 'Menu C',
// }
// bot.dialog("main", [
//     (session) => {
//         Prompts.choice(session, "Main Menu:", menuItems);
//     },
//     (session, results) => {
//         if(results.response){
//             session.beginDialog(menuItems[results.response.entity].item);
//         }
//     }
// ])
// .triggerAction({
//     // The user can request this at any time.
//     // Once triggered, it clears the stack and prompts the main menu again.
//     matches: /^main$/i,
//     confirmPrompt: "This will cancel your request. Are you sure?"
// });

// -----------------------------------------

// bot.customAction({
//     matches: /remind|reminder/gi,
//     onSelectAction: (session, args, next) => {
//         // Set reminder...
//         session.send("Reminder is set.");
//     }
// })

// -----------------------------------------

