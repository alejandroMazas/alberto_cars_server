const router = require("express").Router();
const carRoute = require('./cars.routes')

router.use('/', carRoute)

module.exports = router;