const express = require('express')

require('dotenv').config()

require('./db')

const indexRoutes = require('./routes/index.routes')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('index route')
})

app.use(indexRoutes)

app.listen(process.env.PORT, '127.0.0.1', () => console.log('server on port 5005'))
