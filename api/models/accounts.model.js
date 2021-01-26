const mongoose = require('mongoose')

const accountsSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'nombre es requerido']
  },
  razonfiscal: {
    type: String,
    required: [false, 'razon fiscal es aconsejado']
  },
  categoria: {
    type: String,
    enum_ ['hospitalpublico', 'hospitalprivado' 'servicioradiologia', ],
    required: [true, 'categoria es requerido']
  },
  cif: {
    type: String,
    required: [true, 'nif es requerido']
    //validator nif
  },
  domicilio: {
    type: String,
    required: [false, 'domicilio es aconsejado']
  },
  localidad: {
    type: String,
    required: [false, 'localidad es aconsejado']
  },
  cp: {
    type: String,
    required: [false, 'cod postal es aconsejado']
  },
  provincia: {
    type: String,
    required: [false, 'provincia es aconsejado']
  },
  telefono: {
    type: String,
    required: [false, 'domicilio es aconsejado']
  },
  observaciones: {
    type: String,
    required: [false, 'observaciones del cliente ']
  },

  emailprincipal: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },


  observaciones: {
    type: String,
    required: false
  },

  createdAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  }
})
                              //NOMBRE QUE SE COMPARTE Y SE PUBLICA** VER 
const accountsModel = mongoose.model('accounts', accountsSchema)
module.exports = accountsModel
