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

module.exports = myPlugin