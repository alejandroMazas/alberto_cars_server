const express = require('express')
const router = require("express").Router();

require('dotenv')

require('./db')

const indexRoutes = require('./routes/index.routes')

const app = express()
app.use(express.json())


router.use(indexRoutes)

app.listen(process.env.PORT, '127.0.0.1', () => console.log('server on port 5005'))
