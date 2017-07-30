const request = require('request')

function google() {
  return new Promise((resolve, reject) => {
    request('https://google.com', (err, res, body) => {
      if (err) {
        reject(err)
        return
      }
      resolve(body)
    })
  })
}

google().then((body) => {
  console.log(body)
})
