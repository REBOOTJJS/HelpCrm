const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
  //*** COMO ENLAZO A CUENTA */

  titulo: {
    type: String,
    enum_ ['SR', 'SRA', 'DR', 'DRA', 'LDO'],
    required: [false, 'no es requerido pero si aconsejado']
  },

  puesto: {
    type; String,
    enum_ ['JEFE SERVICIO', 'COMPRAS', 'TIC', 'RADIOLOGIA', 'CIRUGIA', 'SERV_GENERALES'],
    required: [true, 'puesto es requerido']
  }
  nombre: {
    type: String,
    required: [true, 'nombre es requerido']
  },
  apellidos: {
    type: String,
    required: [false, 'apellidos es aconsejado']
  },

  telefonooficina: {
    type: String,
    required: [false, 'telefonooficina es aconsejado']
  },
  telefonomovil: {
    type: String,
    required: [false, 'telefono movil es aconsejado']
  },
  link_linkedin: {
    type: String,
    required: [false, 'cod postal es aconsejado']
  },
  link_twiter: {
    type: String,
    required: [false, 'provincia es aconsejado']
  },
  observaciones: {
    type: String,
    required: [false, 'observaciones del cliente ']
  },
  emailcontacto: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },

creadoPor: {
  type: String,
  enum_ ['JOAQUIN', 'ROSA', 'JERONIMO'],
  required: [true, 'Tienes que indicar quien grabo el contacto']
}

  createdAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  }
})

const contactsModel = mongoose.model('contacts', contactsSchema)
module.exports = contactsModel
