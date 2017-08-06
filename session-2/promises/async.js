
const axios = require('axios')

async function main() {
  let posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
  let users = posts.data
  usersWithPromises = users.map((post) => {
    return axios.get('https://jsonplaceholder.typicode.com/users' + '/' + post['userId'])
  })

  users = []
  for(let userPromise in usersWithPromises) {
    let user = await userPromise
    users.push(user)
  }

  return users
}

main().then((res) => {
  console.log(res)
})
