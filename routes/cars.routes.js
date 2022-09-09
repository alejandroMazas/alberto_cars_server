const router = require("express").Router();
const Cars = require('../models/cars.model')

//router.get('/cars', (req, res) => {
//res.send('funciona')

// Cars
//     .find()
//     .then(allCars => {
//         res.json(allCars)
//     })
//     .catch(err => res.status(500).json(err))
//})

// router.post('/createCars', (req, res) => {

//     const { brand, model, image, generation, production } = req.body

//     Cars
//         .create({ brand, model, image, generation, production })
//         .then(newCar => res.json(newCar))
//         .catch(err => res.status(500).json(err))
// })

module.exports = router