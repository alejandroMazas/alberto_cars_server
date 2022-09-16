const router = require("express").Router();
const Car = require("../models/cars.model");
const Cars = require('../models/cars.model')

router.get('/cars', async (req, res) => {

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

router.get('/cars/:id', async (req, res) => {

    const { id } = req.params

    Cars
        .findById(id)
        .then(myCar => res.json(myCar))
        .catch(err => res.status(500).json(err))

    // try {
    //     const myCar = await Cars.findById(id)
    //     res.json(myCar)
    // } catch (error) {
    //     res.status(500).json(err)
    // }

})

router.put('/cars/:id/update', async (req, res) => {

    const { id } = req.params
    const { brand, model, image, generation, production } = req.body

    try {
        const updatedCar = await Cars.findByIdAndUpdate(id, { brand, model, image, generation, production }, { new: true })
        res.json(updatedCar)
    } catch (error) {
        res.status(500).json(err)
    }
})

router.delete('/cars/:id/delete', async (req, res) => {

    const { id } = req.params

    Cars
        .findByIdAndDelete(id)
        .then(deletedCar => {
            res.json(deletedCar)
        })
        .catch(err => res.status(500).json(err))

    // try {
    //     const deletedCar = await Cars.delete(id)
    //     res.json(deletedCar)
    // } catch (error) {
    //     res.status(500).json(err)
    // }
})

module.exports = router