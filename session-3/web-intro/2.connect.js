const connect = require('connect')

const app = connect()

const STYLE = '<style> * { font-size: 100px; } </style><body>'

app.use((req, res, next) => {
    console.log(req.url)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write(STYLE)

    next()
})

app.use('/test', (req, res, next) => {
    res.end('😋')
})

app.use('/', (req, res, next) => {
    res.end('💩')
})

app.listen(3002)
