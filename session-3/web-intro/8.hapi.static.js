const { Server } = require('hapi')

const app = new Server()

app.connection({ port: 3000 });

app.register(require('inert'), (err) => {

  if (err) {
    throw err;
  }

  app.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('static/serve.html');
    }
  });

});

app.start(() => {
    console.log(app.info.uri)
})
