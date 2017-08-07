const { Server } = require('hapi')
const cookieAuth = require('hapi-auth-cookie')

let user = {
  name: 'Iman',
  password: '1234'
}
let app = new Server()
app.connection({ port: 3000 });

app.register(cookieAuth, (err) => {
  if(err) {
    console.log(err)
  }

  app.auth.strategy('session', 'cookie', {
    password: 'm!*"2/),p4:xDs%KEgVr7;e#85Ah^WYC',
    cookie: 'my-app-cookie-name',
    isSecure: false
  })

  app.route({
    method: 'GET',
    path: '/private-route',
    config: {
      auth: 'session',
      handler: function (request, reply) {
        reply('Yeah! This message is only available for authenticated users!')
      }
    }
  })
  app.route({
    method: 'POST',
    path: '/login',
    config: {
      handler: function (request, reply) {
        var username = request.payload.username
        var password = request.payload.password

        // check if user exists in DB
        // compare passwords
        if(user.name === username && user.password === password) {


          // if everything went smooth, set the cookie with "user" specific data
          request.cookieAuth.set(user);

          reply('Wohoo, great to see you')
        } else {
          reply('Wrong username or password')
        }
      }
    }
  })

  app.route({
    method: 'GET',
    path: '/login',
    config: {
      handler: function (request, reply) {
        return reply('<html><head><title>Login page</title></head><body>' +
          '<form method="post" action="/login">' +
          'Username: <input type="text" name="username"><br>' +
          'Password: <input type="password" name="password"><br/>' +
          '<input type="submit" value="Login"></form></body></html>');
      }
    }
  })
  app.route({
    method: 'GET',
    path: '/some-route',
    config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      handler: function (request, reply) {
        if (request.auth.isAuthenticated) {
          // session data available
          var session = request.auth.credentials

          return reply('Bro, you’re already authenticated :)')
        } else {
          return reply('You are not authenticated')
        }

        // further processing if not authenticated …
      }
    }
  })

  app.route({
    method: 'GET',
    path: '/logout',
    config: {
      auth: 'session',
      handler: function (request, reply) {
        // clear the session data
        request.cookieAuth.clear()

        reply('Logged out. See you around :)')
      }
    }
  })

  app.start((err) => {
    console.log(app.info.uri)
  })
})

