const router = require('express').Router()
const { authUser } = require('../utils')

const {  // como hacer para que vengan todas
  createAccounts,
  getAllAccounts,
  getAccountsById,
  getAccountsByCategory,
  getAccountsByProvince,
  updateAccountsById,
  deleteAccountsById
} = require('../controllers/accounts.controller')




router.post ('/', createAccounts)
router.get ('/', getAllAccounts)
router.get ('/', getAccountsById)
router.get ('/', getAccountsByCategory)
router.get ('/', getAccountsByProvince)
router.put ('/:id', updateAccountsById )
router.delete ('/:id', )

module.exports = router
