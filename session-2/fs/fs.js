const fs = require('fs')

fs.unlink('/tmp/hello', (err) => {
  if (err) throw err
  console.log('successfully deleted /tmp/hello')
})

fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err
  console.log('renamed complete')
})

fs.stat('/tmp/world', (err, stats) => {
  if (err) throw err
  console.log(`stats: ${JSON.stringify(stats)}`)
})
