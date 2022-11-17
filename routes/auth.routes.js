const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
const router = require('./cars.routes')

const Router = express.Router()
const saltRounds = 10

router.post('/signup', (req, res) => {

    const { username, email, password, role } = req.body

    if (password.length < 7) {
        res.status(400).json({ message: "insert at least a 8 characters" })
        return
    }


    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists" })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ username, email, password: hashedPassword })
        })
        .then((createdUser) => {
            const { email, username, _id } = createdUser
            const user = { email, username, _id }

            res.status(200).json({ user })

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal server error" })
        })

})

module.exports = Router