const { Server } = require('hapi')

const app = new Server()

app.connection({
    host: 'localhost',
    port: '3004'
})

app.route({
    method: 'GET',
    path: '/hello/{firstName}/{lastName}',
    handler(request, reply) {
        reply({
            params: request.params
        })
    }
})

app.start(() => {
    console.log(app.info.uri)
})
