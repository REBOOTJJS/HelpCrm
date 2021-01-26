const { response } = require('express')
const AccountsModel = require('../models/accounts.model')
const { handleError } = require('../utils')

module.exports = {
  //añadir los nombres de las funciones a exportar
  createAccounts,
  getAllAccounts,
  getAccountsById,
  getAccountsByCategory,
  getAccountsByProvince,
  updateAccountsById,
  deleteAccountsById
}

function createAccounts (req, res){
  AccountsModel
  .create (

  )
}

function getAllAccounts (req, res){
  AccountsModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
function getAccountsById (req, res){
  AccountsModel
  .findById(req.params.id)
  .then(response=> res.json(response))
  .catch((err) => handleError(err, res))
}

function getAccountsByCategory (req, res){
  AccountsModel
  //falta el codigo para buscar por categoria
}
function getAccountsByProvince (req, res){
  AccountsModel
  //falta el codigo para buscar por provincia
}

function updateAccountsById (req, res) {
  AccountsModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteAccountsById (req, res) {
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
