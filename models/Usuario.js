const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
  	type: String,
  	required: true
  },
  direccion: {
  	type: String,
  	required: true
  },
  telef: {
  	type: String,
  	required: true
  },
  email: {
    type: String,
    default: Date.now
  },
  password: {
  	type: String,
  	default: Date.now
  },
  tipoUsuario: {
    type: Number,
    default: Date.now
  }
});

module.exports = mongoose.model("Usuarios", UsuarioSchema);