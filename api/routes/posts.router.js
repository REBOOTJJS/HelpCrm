const router = require('express').Router()
const { authUser } = require('../utils')

const {
  createPost,
  getPosts
} = require('../controllers/posts.controller')

router.post('/', authUser, createPost)
router.get('/', authUser, getPosts)

module.exports = router
