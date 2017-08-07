const { Server } = require('hapi')

const app = new Server()

app.connection({ port: 3000 });

const handler = (request, reply) => {

    reply.view('index', {
        title: 'Handlebars | Hapi ' + request.server.version,
        message: 'Hello World!'
    });
};

app.register(require('vision'), (err) => {

    if (err) {
        throw err;
    }

    app.views({
        engines: { 
            html: require('handlebars'),            
            
        },
        path: __dirname + '/static',
        layout: true 
    });

    app.route({ method: 'GET', path: '/', handler: handler });
});

app.start(() => {
    console.log(app.info.uri)
})
