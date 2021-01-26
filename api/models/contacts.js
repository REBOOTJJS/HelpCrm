const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
  //*** COMO ENLAZO A CUENTA */
  cuenta: {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'accounts',
    required: true   // no requerirlo daria flexibilidad [para cuanto tenga varios registros**]
  }

  //para imagen poner una url

  titulo: {
    type: String,
    enum: ['SR', 'SRA', 'DR', 'DRA', 'LDO'],
    required: [false, 'no es requerido pero si aconsejado']
  },

  puesto: {
    type: String,
    enum : ['JEFE SERVICIO', 'COMPRAS', 'TIC', 'RADIOLOGIA', 'CIRUGIA', 'SERV_GENERALES'],
    required: [true, 'puesto es requerido']
  },

  nombre: {
    type: String,
    required: [true, 'nombre es requerido']
  },

  apellidos: {
    type: String
  },

  telefonooficina: {
    type: String
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
