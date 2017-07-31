const request = require('request')
const axios = require('axios')

function google () {
  return new Promise((resolve, reject) => {
    request('https://jsonplaceholder.typicode.com/posts/1', (err, res, body) => {
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

// Chaining
axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
  console.log(res)
  return axios.get('https://jsonplaceholder.typicode.com/posts/2')
}).then((res) => {
  console.log(res)
})
