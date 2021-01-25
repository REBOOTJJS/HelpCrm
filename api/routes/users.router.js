const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
} = require('../controllers/users.controller')

router.get('/', authUser, getAllUsers)
router.get('/:id', getUserById)
router.delete('/:id', deleteUserById)
router.put('/:id', updateUser)

module.exports = router
