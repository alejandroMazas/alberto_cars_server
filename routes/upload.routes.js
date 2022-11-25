const Router = require('express').Router()

const uploader = require('../../config/cloudinary.config')
const router = require('./cars.routes')

router.post('/image', uploader.single('imageData'), (req, res) => {

    if (!reqFile) {
        res.status(200).json({ errorMessage: 'upload error' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})

module.exports = Router