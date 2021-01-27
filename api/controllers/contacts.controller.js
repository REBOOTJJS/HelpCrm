const { response } = require('express')
const ContactsModel = require('../models/contacts.model')
const { handleError } = require('../utils')

module.exports = {
  //añadir los nombres de las funciones a exportar // se pueden todas**
  createContacts,
  getAllContacts,
  getContactsById,
  getContactsByPosition,
  getContactsByAccounts,
  updateContactsById,
  deleteContactsById


}

function createContacts (req, res){
  ContactsModel
  .create(
    req.body
  ).then(result => {
    res.json (result)
  }).catch(err =>{
    res.json(err)
  })
}
/*
function createAccounts (req, res){
  AccountsModel
  .create (
     req.body
     //importante que del front vengan correctos
     //promesa el then lo bueno
  ).then(result => {
    //res.send('todo ok')
    res.json (result)
  }).catch(err =>{
    res.json (err)
  })

}*/


function getAllContacts (req, res){
  ContactsModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
function getContactsById (req, res){
  ContactsModel
  .findById(req.params.id)
  .then(response=> res.json(response))
  .catch((err) => handleError(err, res))
}

function getContactsByPosition (req, res){
  ContactsModel
  //falta el codigo para buscar por puesto
}
function getContactsByAccounts (req, res){
  ContactsModel
  //falta el codigo para contactos de una cuenta todos
}

function updateContactsById (req, res) {
  ContactsModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteContactsById (req, res) {
  ContactsModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}



