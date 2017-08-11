const Hapi = require('hapi');
const myPlugin = require('./routes')

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

// server.register(myPlugin, (err) => {
// 	if (err) {
// 		console.error('Failed to load plugin:', err);
// 	}
// });

server.register(myPlugin, {
  routes: {
    prefix: '/plugins'
  }
},(err) => {
  if (err) {
    console.error('Failed to load plugin:', err);
  }
});

server.start(() => {
    console.log(server.info.uri)
})
