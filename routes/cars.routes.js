const router = require("express").Router();
const Cars = require('../models/cars.model')

router.get('/', async (req, res) => {

    // Cars
    //     .find()
    //     .then(allCars => {
    //         res.json(allCars)
    //     })
    //     .catch(err => res.status(500).json(err))
    
    try {
        const allCars = await Cars.find();
        res.json(allCars);
    } catch (error) {
        res.status(500).json(err)
    }
})

router.post('/createCars', async (req, res) => {

    const { brand, model, image, generation, production } = req.body

    // Cars
    //     .create({ brand, model, image, generation, production })
    //     .then(newCar => res.json(newCar))
    //     .catch(err => res.status(500).json(err))

    try {
        const newCar = await Cars.create({ brand, model, image, generation, production })
        res.json(newCar)
    } catch (error) {
        res.status(500).json(err)
    }
})

module.exports = router