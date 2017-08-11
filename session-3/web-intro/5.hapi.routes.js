const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

// server.route({
// 	method: 'GET',
// 	path: '/',
// 	handler: function (request, reply) {
// 		reply('Hello, world!');
// 	}
// });

// server.route({
// 	method: ['POST', 'PUT'],
// 	path: '/',
// 	handler: function (request, reply) {
// 		console.log(request.params)
// 		reply('Your username is ' + request.payload.username);
// 	}
// });

// server.route({
// 	method: 'GET',
// 	path: '/hello/{user}',
// 	handler: function (request, reply) {
// 		reply('Hello ' + encodeURIComponent(request.params.user) + '!');
// 	}
// });

// server.route({
// 	method: 'GET',
// 	path: '/hello/{user?}',
// 	handler: function (request, reply) {
// 		const user = request.params.user ? encodeURIComponent(request.params.user) : 'stranger';
// 		reply('Hello ' + user + '!');
// 	}
// });

// server.route({
//     method: 'GET',
//     path: '/hello/{user*2}/{family*2}',
//     handler: function (request, reply) {
// 		const userParts = request.params.user.split('/');
// 		console.log(request.params.user + request.params.family
		
// 		)
//         reply('Hello ' + encodeURIComponent(userParts[0]) + ' ' + encodeURIComponent(userParts[1]) + '!');
//     }
// });

server.route({
    method: 'GET',
    path: '/hello/{user*}',
    handler: function (request, reply) {
		if(request.params.user) {			
		const userParts = request.params.user.split('/');
		reply('Your user parts are ' + userParts.join(' ') + '!');
		} else {
			reply('No params specified')
		}
    }
});

server.start(() => {
    console.log(server.info.uri)
})
