const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')

  const { headers, url, method } = req

  if(url === '/test') {
    res.end(JSON.stringify({url, method, headers}))
  } else if(url === '/') {
    res.end('Hello!')
  } else {
    res.statusCode = 404
    res.end('404!')
  }

})

server.listen(3001)
