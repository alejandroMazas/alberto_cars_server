const { Schema, model } = require('mongoose')

const carSchema = new Schema(
    {
        brand: String,
        model: String,
        image: String,
        generation: String,
        production: String,

        carType: String,
        segment: String,
        doors: String,
        carbody: String,

        carLength: Number,
        width: Number,
        height: Number,
        battle: Number,
        plazas: Number,
        distribution: String,

        motor: String,
        mechanic: String,
        propulsion: String,
        carfuel: String

    },
    { timestamps: true }

)

const Car = model('Car', carSchema)

module.exports = Car