const router = require('express').Router()
const { authUser } = require('../utils')

const {
  createAccounts,
  getAllAccounts,
  getAccountsById,
  getAccountsByCategory,
  getAccountsByProvince,
  updateAccountsById,
  deleteAccountsById
} = require('../controllers/accounts.controller')



// el segundo parametro es la funcion que haga lo que le pasamos
router.post ('/', createAccounts)
router.get ('/', getAllAccounts)
router.get ('/:id', getAccountsById)
router.get ('/category/:category', getAccountsByCategory)
router.get ('/province/:province', getAccountsByProvince)
router.put ('/:id', updateAccountsById )
router.delete ('/:id', deleteAccountsById )
//router.get (' ')

module.exports = router
