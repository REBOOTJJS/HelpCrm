const router = require ('express').Router()
const { authUser } = require('../utils')

const  {
  createContacts,
  getAllContacts,
  getContactsById,
  getContactsByPosition,
  getContactsByAccounts,
  updateContactsById,
  deleteContactsById
} = require('../controllers/contacts.controller')



router.post ('/', createContacts)
router.get ('/', getAllContacts)
router.get ('/', getContactsById)
router.get ('/', getContactsByPosition)
router.get ('/', getContactsByAccounts)
router.put ('/', updateContactsById)
router.delete ('/', deleteContactsById)

