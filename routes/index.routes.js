const router = require("express").Router();
const carRoute = require('./cars.routes')
const authRoute = require('./auth.routes')

router.use('/', carRoute)
router.use('/auth', authRoute)

module.exports = router;