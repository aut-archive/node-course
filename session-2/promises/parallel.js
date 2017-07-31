const axios = require('axios')

let posts = [1, 2, 3, 4]

Promise.all(posts.map(async (item) => {
  let result = await axios.get('https://jsonplaceholder.typicode.com/posts/' + item)
  console.log(result)
}))
