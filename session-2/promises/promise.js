const request = require('request')
const axios = require('axios')

function makeRequest(url) {
  return new Promise((resolve, reject) => {

    request(url, (err, res, body) => {
      if(err) {
        reject(err)
        return
      } else {
        resolve(body)
        return
      }
    })
  })
}
makeRequest('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
  console.log(res)
})
// function google () {
//   return new Promise((resolve, reject) => {
//     request('https://jsonplaceholder.typicode.com/posts/1', (err, res, body) => {
//       if (err) {
//         reject(err)
//         return
//       }
//       resolve(body)
//     })
//   })
// }

// google().then((body) => {
//   console.log(body)
// })

Chaining
axios.get('http://fdaslkj').then((res) => {
  let firstPost = res.data[0]
  console.log(firstPost)
  return axios.get('https://jsonplaceholder.typicode.com/users/' + firstPost['userId'])
}).catch((err) => {
  console.log(err)
})

// console.log('Hello')