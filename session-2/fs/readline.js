const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`)
})

// let prefix = 'OHAI> '
// rl.setPrompt(prefix, prefix.length)
// rl.prompt()

// rl.on('line', (input) => {
//  console.log(`Received: ${input}`)
// })

rl.write('Delete this!')
// Simulate Ctrl+u to delete the line written previously
// rl.write(null, { ctrl: true, name: 'u' })
