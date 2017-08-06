const express = require('express')

const app = express()

app.use(require('body-parser').json())

const STYLE = '<style> * { font-size: 100px; } </style><body>'

// app.use((req, res, next) => {
//     console.log(req.url)
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/html')
//     res.write(STYLE)
//     next()
// })

app.get('/', (req, res) => {
    res.json({
        works: '👌',
        query: req.query
    })
    res.end()
})

app.listen(3003)