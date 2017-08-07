const Hapi = require('hapi');
const Boom = require('boom');

const dbOpts = {
	url: 'mongodb://localhost:27017/test',
	settings: {
		poolSize: 10
	},
	decorate: true
};

const server = new Hapi.Server();

server.register({
	register: require('hapi-mongodb'),
	options: dbOpts
}, function (err) {
	if (err) {
		console.error(err);
		throw err;
	}

	server.route( {
		method: 'GET',
		path: '/users/{id}',
		handler(request, reply) {
			const db = request.mongo.db;
			const ObjectID = request.mongo.ObjectID;

			db.collection('users').findOne({  _id: new ObjectID(request.params.id) }, function (err, result) {

				if (err) {
					return reply(Boom.internal('Internal MongoDB error', err));
				}

				reply(result);
			});
		}
	});

	server.start(function() {
		console.log(`Server started at ${server.info.uri}`);
	});
});
