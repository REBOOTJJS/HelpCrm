const userModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function signUp (req, res) {
  if (req.body && req.body.password) {
    const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
    console.log(req.body)  // esto es buenisimo para ver que enviamos
    console.log('Encryp'+encryptedPasswd)
    userModel
      .create({

        name: req.body.name,
        email: req.body.email,
        password: encryptedPasswd
      })
      .then(user => {   // con esta funcion flecha  paso todo el objeto.
        console.log(user)
        const data = { email: user.email, name: user.name }
        const token = jwt.sign(data, process.env.SECRET)

        res.status(200).json({ token: token, ...data })
      })
      .catch(err => res.status(500).json(err))
  }
}
function login (req, res) {
  userModel
    .findOne({
      email: req.body.email,
    })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const data = { email: user.email, name: user.name }
          const token = jwt.sign(data, process.env.SECRET)

          res.status(200).json({ token: token, ...data })
        } else {
          res.send('passwords do not match')
        }
      } else {
        res.send('User email not found')
      }
    })
    .catch(err => res.status(500).json(err))
}

module.exports = {
  signUp,
  login
}
