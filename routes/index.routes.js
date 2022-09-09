const router = require("express").Router();
const carRoute = require('./cars.routes')

router.use('/cars', carRoute)

module.exports = router;