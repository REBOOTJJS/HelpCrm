const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  /*
  usuario: {
    type: String,
    required: [true, 'email es requerido']
  },
  nombre: {
    type: String,
    required: [true, 'nombre es requerido']
  },
  apellidos: {
    type: String,
    required: [true, 'apellidos es requerido']
  },
  nif: {
    type: String,
    required: [true, 'nif es requerido']
    //validator nif
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'ventas'],
    required: false,
    default: 'ventas'
  },
  observaciones: {
    type: String,
    required: false
  },
  usuario: {
    type: String,
  },
*/

 
  name: {
    type: String,
    maxlength : 20,
    required: true
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },

  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
