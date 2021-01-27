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
router.get ('/:id', getContactsById)
router.get ('/position/:position', getContactsByPosition)
router.get ('/cuenta/:idcuenta', getContactsByAccounts)
router.put ('/', updateContactsById)
router.delete ('/', deleteContactsById)

//hace publico el contenido de este fich
module.exports = router
