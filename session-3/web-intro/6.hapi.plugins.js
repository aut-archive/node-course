const Hapi = require('hapi');


const myPlugin = {
	register: function (server, options, next) {
		server.route({
			method: 'GET',
			path: '/test',
			handler: function (request, reply) {
				reply('test passed');
			}
		});
		next();
	}
};

myPlugin.register.attributes = {
	name: 'myPlugin',
	version: '1.0.0'
};

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.register(myPlugin, (err) => {
	if (err) {
		console.error('Failed to load plugin:', err);
	}
});

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
