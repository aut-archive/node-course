const { Server } = require('hapi')

const app = new Server()

app.connection({
    host: 'localhost',
    port: '3004'
})

app.route({
    method: '*',
    path: '/hello/{firstName}/{lastName}',
    handler(request, reply) {
        reply({
            params: request.params,
            goje: 'ghermez'
        })
    }
})

app.start(() => {
    console.log(app.info.uri)
})
