const Hapi = require('hapi');
const Boom = require('boom');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 3000
});

// Register bell and hapi-auth-cookie with the server
server.register([require('hapi-auth-cookie'), require('bell')], function(err) {

  //Setup the session strategy
  server.auth.strategy('session', 'cookie', {
    password: 'secret_cookie_encryption_password', //Use something more secure in production
    redirectTo: '/auth/github', //If there is no session, redirect here
    isSecure: false //Should be set to true (which is the default) in production
  });

  server.auth.strategy('github', 'bell', {
    provider: 'github',
    password: 'secret_cookie_encryption_password', //Use something more secure in production
    clientId: '92f7b2fc5743d8fb7db2',
    clientSecret: 'f0abc06d423f9fb2ef620f46f1cf500d44396202',
    isSecure: false
  });

  //Setup the routes (this could be done in an own file but for the sake of simplicity isn't)
  server.route({
    method: 'GET',
    path: '/auth/github',
    config: {
      auth: 'github',
      handler: function(request, reply) {

        if (!request.auth.isAuthenticated) {
          return reply(Boom.unauthorized('Authentication failed: ' + request.auth.error.message));
        }

        //more useful here - like loading or setting up an account (social signup).
        const profile = request.auth.credentials.profile;

        request.cookieAuth.set({
          githubId: profile.id,
          username: profile.username,
          displayName: profile.displayName
        });

        return reply.redirect('/');
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    config: {
      auth: 'session',
      handler: function(request, reply) {

        //Return a message using the information from the session
        return reply('Hello, ' + request.auth.credentials.displayName + '!');
      }
    }
  });

  // Start the server
  server.start((err) => {

    if (err) {
      throw err;
    }

    console.log('Server running at:', server.info.uri);
  });
});
