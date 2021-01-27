const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const postsRouter = require('./posts.router')
const accountsRouter = require('./accounts.router')
const contactsRouter = require('./contacts.routers')
const { authUser } = require('../utils') // Authenticated Route

router
  .use('/users', usersRouter)
  .use('/auth', authRouter)
  .use('/accounts', accountsRouter)
  .use('/contacts', contactsRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
