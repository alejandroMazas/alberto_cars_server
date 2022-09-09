const router = require("express").Router();

// router.use('/cars', require('./cars.routes'))

router.get('/cars', (req, res) => {
    res.send('funciona')
})

module.exports = router;