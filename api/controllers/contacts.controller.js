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
  console.log("consulta por puesto")
  ContactsModel
  .find({puesto: req.params.position})
  .then(response => res.json(response))
  .catch((err) => handleError, res)

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
  console.log('estoy llegando al delete de contactos')
  ContactsModel
    //.remove({ _id: req.params.id })
    .findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}



