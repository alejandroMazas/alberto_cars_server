const router = require("express").Router();
const carRoute = require('./cars.routes')
const authRoute = require('./auth.routes')
const uploadRoute = require('./upload.routes')

router.use('/', carRoute)
router.use('/auth', authRoute)
router.use('/upload', uploadRoute)

module.exports = router;