const { response } = require('express')
const AccountsModel = require('../models/accounts.model')
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
  AccountsModel
  .create (

  )
}

function getAllContacts (req, res){
  AccountsModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
function getContactsById (req, res){
  AccountsModel
  .findById(req.params.id)
  .then(response=> res.json(response))
  .catch((err) => handleError(err, res))
}

function getContactsByPosition (req, res){
  AccountsModel
  //falta el codigo para buscar por puesto
}
function getContactsByAccounts (req, res){
  AccountsModel
  //falta el codigo para contactos de una cuenta todos
}

function updateContactsById (req, res) {
  AccountsModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteContactsById (req, res) {
  AccountsModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}


/*
function createPost (req, res) {
  PostModel
    .create({
      title: req.body.title,
      content: req.body.content,
      user_id: res.locals.user._id
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
*/
/*
function getAllUsers (req, res) {
  UserModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getUserById (req, res) {
  UserModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  UserModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
*/
