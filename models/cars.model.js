const { Schema, model } = require('mongoose')

const carSchema = new Schema(
    {
        brand: { type: String, require: true },
        model: { type: String, required: true },
        image: String,
        generation: String,
        production: String,
        typology: {
            type: String,
            segment: String,
            doors: String,
            carbody: String
        },
        Dimensions: {
            length: Number,
            width: Number,
            height: Number
        }
    },
    { timestamps: true }

)

const Car = model('Car', carSchema)

module.exports = Car