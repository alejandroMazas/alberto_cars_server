const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
const router = require('./cars.routes')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('../midlewares/jwt.midleware')


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

router.post('/login', (req, res) => {

    if (email === "" || password === "") {
        res.status(400).json({ message: 'Insert an email and a password' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: 'User not found' })
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, username, email, role } = foundUser
                const payload = { _id, email, username, role }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: '10h' }
                )

                res.status(200).json({ authToken })
            } else res.status(401).json({ message: 'Unable to authenticate the user' })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal Server Error" })
        })

})

router.get('/verify', isAuthenticated, (req, res) => {
    res.status(200).json(req.payload)
})

module.exports = Router