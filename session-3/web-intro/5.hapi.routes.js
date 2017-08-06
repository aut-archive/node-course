const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		reply('Hello, world!');
	}
});

server.route({
	method: ['PUT', 'POST'],
	path: '/',
	handler: function (request, reply) {
		reply('I did something!');
	}
});

server.route({
	method: 'GET',
	path: '/hello/{user}',
	handler: function (request, reply) {
		reply('Hello ' + encodeURIComponent(request.params.user) + '!');
	}
});

server.route({
	method: 'GET',
	path: '/hello/{user?}',
	handler: function (request, reply) {
		const user = request.params.user ? encodeURIComponent(request.params.user) : 'stranger';
		reply('Hello ' + user + '!');
	}
});

server.route({
    method: 'GET',
    path: '/hello/{user*2}',
    handler: function (request, reply) {
        const userParts = request.params.user.split('/');
        reply('Hello ' + encodeURIComponent(userParts[0]) + ' ' + encodeURIComponent(userParts[1]) + '!');
    }
});

server.route({
    method: 'GET',
    path: '/hello/{user*}',
    handler: function (request, reply) {
        const userParts = request.params.user.split('/');
        reply('Hello ' + encodeURIComponent(userParts[0]) + '!');
    }
});

server.start(() => {
    console.log(server.info.uri)
})
