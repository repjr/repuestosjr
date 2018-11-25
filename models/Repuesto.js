const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RepuestoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  detalle: {
  	type: String,
  	required: true
  },
  urlImagen: {
  	type: Date,
  	required: true
  },
  ventas: {
  	type: Number,
  	required: true
  },
  busquedas: {
    type: Date,
    default: Date.now
  },
  existencia: {
  	type: Date,
  	default: Date.now
  }
});

module.exports = mongoose.model("Repuestos", RepuestoSchema);
