const express = require('express')

require('dotenv')

require('./db')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('funciona')
})

app.listen(process.env.PORT, '127.0.0.1', () => console.log('server on port 5005'))
